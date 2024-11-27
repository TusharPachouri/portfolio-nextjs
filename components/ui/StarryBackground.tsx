"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let clock: THREE.Clock, delta: number;
  let isZoomingBack = false;
  const initialCameraPosition = { x: 0, y: 0, z: 1 };
  const defaultCameraPosition = { x: 0, y: 0, z: 1.5 };
  const zoomLerpSpeed = 0.005;
  const zoomResetInterval = 5; // Reset zoom every 5 seconds

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set up Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.2, 1000);
    camera.position.set(initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create star field
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 15000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const twinkleOffsets = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      // Distribute stars in a more spherical manner
      const phi = Math.random() * Math.PI * 2;
      const cosTheta = Math.random() * 2 - 1;
      const theta = Math.acos(cosTheta);
      const radius = Math.cbrt(Math.random()) * 500; // Cubic root for more even distribution

      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);

      // Varied star colors (white to slight blue/yellow tints)
      const baseColor = 0.7 + Math.random() * 0.3;
      colors[i * 3] = baseColor + (Math.random() - 0.5) * 0.2; // R
      colors[i * 3 + 1] = baseColor + (Math.random() - 0.5) * 0.2; // G
      colors[i * 3 + 2] = baseColor + (Math.random() - 0.5) * 0.2; // B

      // Varied star sizes
      sizes[i] = Math.random() * 1.5 + 0.5;

      // Random offsets for twinkling effect
      twinkleOffsets[i] = Math.random() * Math.PI * 2;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    starsGeometry.setAttribute('twinkleOffset', new THREE.BufferAttribute(twinkleOffsets, 1));

    // Custom shader material for more realistic star rendering
    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        pointMultiplier: { value: window.innerHeight / (Math.tan(Math.PI / 180.0 * 50.0) * 2.0) }
      },
      vertexShader: `
        attribute float size;
        attribute float twinkleOffset;
        uniform float time;
        uniform float pointMultiplier;
        varying vec3 vColor;
        varying float vTwinkleOffset;

        void main() {
          vColor = color;
          vTwinkleOffset = twinkleOffset;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Twinkle effect and size variation
          float twinkleIntensity = sin(time * 2.0 + twinkleOffset) * 0.5 + 0.5;
          float adjustedSize = size * (1.0 + twinkleIntensity * 0.5);
          
          gl_PointSize = adjustedSize * pointMultiplier / (-mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vColor;
        varying float vTwinkleOffset;

        void main() {
          // Create a circular star shape
          vec2 centered = gl_PointCoord * 2.0 - 1.0;
          float dist = length(centered);
          
          // Soft circular shape with slight glow
          float alpha = smoothstep(1.0, 0.7, dist);
          
          // Twinkle effect
          float twinkleIntensity = sin(time * 2.0 + vTwinkleOffset) * 0.5 + 0.5;
          
          gl_FragColor = vec4(vColor, alpha * (0.7 + twinkleIntensity * 0.3));
        }
      `,
      transparent: true,
      vertexColors: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add clock for delta timing
    clock = new THREE.Clock();

    // Smooth zoom back to the default camera position every few seconds
    const zoomInterval = setInterval(() => {
      isZoomingBack = true;
    }, zoomResetInterval * 1000);

    // Animation loop
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      delta = clock.getDelta();

      requestAnimationFrame(animate);
      
      // Rotate stars slowly
      stars.rotation.y -= 0.0005;

      // Update time uniform for twinkling effect
      if (starsMaterial.uniforms) {
        starsMaterial.uniforms.time.value = elapsedTime;
      }

      // Smooth zoom back to the default camera position if isZoomingBack is true
      if (isZoomingBack) {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, defaultCameraPosition.x, zoomLerpSpeed);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, defaultCameraPosition.y, zoomLerpSpeed);
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, defaultCameraPosition.z, zoomLerpSpeed);

        if (
          Math.abs(camera.position.x - defaultCameraPosition.x) < 0.01 &&
          Math.abs(camera.position.y - defaultCameraPosition.y) < 0.01 &&
          Math.abs(camera.position.z - defaultCameraPosition.z) < 0.01
        ) {
          isZoomingBack = false; // Stop zooming once the camera is close to the default position
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // Update point multiplier for consistent point sizes
        if (starsMaterial.uniforms) {
          starsMaterial.uniforms.pointMultiplier.value = 
            window.innerHeight / (Math.tan(Math.PI / 180.0 * 50.0) * 2.0);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(zoomInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />;
};

export default StarryBackground;