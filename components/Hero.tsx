"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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
        gltfLoader.load('http://localhost:3000/astronaut.glb', async (gltf) => {
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
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
    const webGLRenderer = new THREE.WebGLRenderer({ canvas: canvasElement, alpha: true });
    webGLRenderer.setSize(window.innerWidth / 2, window.innerHeight);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load and add model
    const loadAndAddModel = async () => {
      const gltfLoader = new GLTFLoader();
      gltfLoader.load('http://localhost:3000/Astronaut2.glb', (gltf: { scene: any; }) => {
        const model = gltf.scene;

        // Add the model to the scene
        scene.add(model);
        camera.position.z = 3.5;

        // Start animation
        animateModel(model);
      }, undefined, (error: any) => {
        console.error('Error loading model:', error);
      });
    };

    // Animation loop with model movement
    const animateModel = (model: THREE.Scene) => {
      const rotationSpeed = 0.005;
      const upperLimit = 1.5;
      const lowerLimit = -1.5;
      let positionOffset = 0;
      let direction = 1;

      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model around the y-axis
        model.rotation.y += rotationSpeed;
        model.rotation.z += rotationSpeed;
        model.rotation.x += rotationSpeed;

        // Move the model up and down along the y-axis
        if (positionOffset > upperLimit || positionOffset < lowerLimit) {
          direction *= -1;
        }
        positionOffset += direction * 0.01;
        model.position.y = positionOffset;

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
        webGLRenderer.setSize(window.innerWidth / 4, window.innerHeight);
        camera.aspect = window.innerWidth / (3 * window.innerHeight);
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

          <div className="flex items-end justify-end relative my-20 z-10">
            <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[66vw] flex flex-col items-center justify-center text-right">
              <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80 text-left">
                Dynamic Web Magic with Next.js
              </p>
              <TextGenerateEffect
                words="Transforming Concepts into Seamless User Experiences"
                className="text-center text-[40px] md:text-3xl lg:text-4xl "
              />
              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi! I&apos;m Tushar Pachouri, a Software Developer.
              </p>
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
