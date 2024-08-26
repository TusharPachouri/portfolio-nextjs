"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { AnimationMixer } from 'three';
import { storeModelInIndexedDB, loadModelFromIndexedDB } from '@/utils/indexedDB';
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initializeThreeJS = async () => {
      const gltfLoader = new GLTFLoader();

      const savedModelData = await loadModelFromIndexedDB();
      if (!savedModelData) {
        gltfLoader.load('https://localhost:3000/astronaut.glb', async (gltf) => {
          const loadedModel = gltf.scene;

          // Add the loaded model to IndexedDB
          await storeModelInIndexedDB(loadedModel.toJSON());
          console.log('Model stored in IndexedDB');
        }, undefined, (error: any) => {
          console.error('Error loading model:', error);
        });
      } else {
        console.log('Model loaded from IndexedDB:', savedModelData);
      }
    };

    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    // Set up Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const webGLRenderer = new THREE.WebGLRenderer({ canvas: canvasElement, alpha: true });
    webGLRenderer.setSize(window.innerWidth / 2, window.innerHeight);
    webGLRenderer.setPixelRatio(window.devicePixelRatio); // Higher resolution for HD graphics

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light with reduced intensity
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 10, 10);
    scene.add(pointLight);

    const frontSpotLight = new THREE.SpotLight(0xffffff, 1.2);
    frontSpotLight.position.set(0, 5, 5); // Positioned directly in front of the model
    frontSpotLight.angle = Math.PI / 6;
    frontSpotLight.penumbra = 0.5;
    frontSpotLight.decay = 2;
    frontSpotLight.distance = 50;
    frontSpotLight.castShadow = true;
    scene.add(frontSpotLight);

    // Load and add model
    const loadAndAddModel = async () => {
      const gltfLoader = new GLTFLoader();
      gltfLoader.load('/dyson_sphere.glb', (gltf: { scene: any; animations: any[]; }) => {  // Use a relative path
        const model = gltf.scene;
        const animations = gltf.animations;

        // Ensure the model scale is uniform to maintain the spherical shape
        model.scale.set(1, 1, 1);

        // Apply color to the model
        model.traverse((node: any) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        // Add the model to the scene
        scene.add(model);
        camera.position.z = 3.5;

        // Animation setup
        const mixer = new AnimationMixer(model);
        animations.forEach((clip) => mixer.clipAction(clip).play());

        // Start animation
        animateModel(model, mixer);
      }, undefined, (error: any) => {
        console.error('Error loading model:', error);
      });
    };

    // Animation loop with model rotation on a fixed x-axis
    
    const animateModel = (model: THREE.Scene, mixer: AnimationMixer) => {
      const rotationSpeed = 0.005;
      const orbitSpeed = 0.01;
      const orbitRadius = 1.5;
      let time = 0;
      const initialPosition = new THREE.Vector3(0, 0, 0);
      
      const animate = () => {
        requestAnimationFrame(animate);
    
        // Update animations
        mixer.update(0.01);
    
        // Rotate the model around its own axes
        model.rotation.x += rotationSpeed;
        model.rotation.y += rotationSpeed;
        model.rotation.z += rotationSpeed;
    
        // Steady orbital movement
        time += orbitSpeed;
        const x = Math.cos(time) * orbitRadius;
        const y = Math.sin(time * 0.7) * orbitRadius * 0.5; // Smaller vertical movement
        const z = Math.sin(time) * orbitRadius;
    
        model.position.set(x, y, z);
    
        // Gradually return to initial position
        model.position.lerp(initialPosition, 0.001);
    
        // Log the model's position in real-time
        console.log(`Model position: x=${model.position.x.toFixed(2)}, y=${model.position.y.toFixed(2)}, z=${model.position.z.toFixed(2)}`);
    
        orbitControls.update();
        webGLRenderer.render(scene, camera);
      };
    
      animate();
    };


    // Controls
    const orbitControls = new OrbitControls(camera, webGLRenderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.dampingFactor = 0.25;
    orbitControls.enableZoom = true;

    // Handle window resize
    const handleResize = () => {
      if (canvasElement) {
        webGLRenderer.setSize(window.innerWidth / 2, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);
    initializeThreeJS();
    loadAndAddModel();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <div className="flex-1">
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', background: 'transparent', overflow: 'visible', zIndex: '3', position: 'relative' }}></canvas>
      </div>
      <div className="flex-1">
        <div className="pb-20 pt-36">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
          </div>

          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="flex items-end justify-start relative my-20 z-10 px-4">
              <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[66vw] flex flex-col items-start text-left">
                {/* <p className="uppercase tracking-widest text-xs text-blue-100 mb-2">
                  Dynamic Web Magic with Next.js
                </p> */}
                <TextGenerateEffect
                  words="Hi! I’m Tushar Pachouri"
                  className="text-center text-[40px] md:text-3xl lg:text-4xl "
                />
                <TextGenerateEffect
                  words="A Software Developer."
                  className="text-center text-[40px] md:text-3xl lg:text-4xl "
                />
                {/* <p className="text-left md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
                  Hi! I’m Tushar Pachouri, a Software Developer.
                </p> */}
                <p className="text-left mb-4 text-sm md:text-sm lg:text-base">
                I work with clients to turn their ideas into impactful digital solutions. Combining strategy with creativity, I craft engaging experiences that enhance user interaction and strengthen brand identity.    </p>
                {/* <p className="text-left text-sm md:text-sm lg:text-base">
                  My team is small enough to enjoy the smaller accomplishments, yet agile enough to take on projects of all sizes.
                </p> */}
                <a href="#about">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>  

        </div>
      </div>
    </div>
  );
};

export default Hero;
