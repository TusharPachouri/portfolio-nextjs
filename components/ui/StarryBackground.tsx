// components/StarryBackground.tsx
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
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create star field
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 1000;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 1.5,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);

    scene.add(stars);

    // Add clock for delta timing
    // eslint-disable-next-line react-hooks/exhaustive-deps
    clock = new THREE.Clock();

    // Smooth zoom back to the default camera position every few seconds
    setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isZoomingBack = true;
    }, zoomResetInterval * 1000);

    // Animation loop
    const animate = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      delta = clock.getDelta();

      requestAnimationFrame(animate);
      stars.rotation.y -= 0.0025;

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
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />;
};

export default StarryBackground;
