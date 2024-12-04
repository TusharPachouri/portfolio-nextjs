"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { AnimationMixer } from "three";
import { Spotlight } from "./ui/Effects/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import {
  FaCode,
  FaLocationArrow,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";  


const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    // Set up Three.js Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true, // Enables transparent background
    });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Add Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5)); // Soft white light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load 3D Model
    const loadModel = async () => {
      const loader = new GLTFLoader();
      loader.load(
        "/3dModels/dyson_sphere.glb",
        (gltf) => {
          const model = gltf.scene;
          const mixer = new AnimationMixer(model);

          model.scale.set(1, 1, 1); // Uniform scaling
          model.traverse((node: any) => {
            if (node.isMesh) {
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });

          // Add model to the scene and animate it
          scene.add(model);
          camera.position.z = 3.5;
          animateModel(model, mixer);
        },
        undefined,
        (error) => console.error("Error loading model:", error)
      );
    };

    // Animate Model: Rotation and Orbital Movement
    const animateModel = (model: THREE.Group, mixer: AnimationMixer) => {
      const rotationSpeed = 0.005;
      const orbitSpeed = 0.01;
      const orbitRadius = 1.5;
      let time = 0;

      const animate = () => {
        requestAnimationFrame(animate);
        mixer.update(0.01);

        // Rotate model
        model.rotation.x += rotationSpeed;
        model.rotation.y += rotationSpeed;

        // Orbital movement
        time += orbitSpeed;
        model.position.set(
          Math.cos(time) * orbitRadius,
          Math.sin(time * 0.7) * orbitRadius * 0.5,
          Math.sin(time) * orbitRadius
        );

        // Render the scene
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    };

    // Add Orbit Controls for Interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    // Handle Window Resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Load Model
    loadModel();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex">
      {/* 3D Model Canvas */}
      <div className="flex-1">
        <canvas
          ref={canvasRef}
          className="w-full h-full bg-transparent overflow-visible z-10 relative"
        />
      </div>

      {/* Hero Section Text */}
      <div className="flex-1">
        <div className="pb-20 pt-36">
          {/* Visual Effects */}
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          {/* Content Section */}
          <div className="flex items-end justify-start relative my-10 md:my-20 z-10 px-4">
            <div className="w-full max-w-full sm:max-w-xl lg:max-w-[66vw] flex flex-col items-start text-left">
              <TextGenerateEffect
                words="Hi! I'm Tushar Pachouri"
                className="text-center uppercase text-3xl lg:text-4xl mb-4 w-full"
              />
              <p className="text-left text-white mb-4 text-sm lg:text-base leading-relaxed">
                I work with clients to turn ideas into impactful digital
                solutions. Combining strategy and creativity, I craft engaging
                experiences that enhance user interaction.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <a href="/contact">
                  <MagicButton
                    title="Let's Collaborate"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                <a href="/portfolio">
                  <MagicButton
                    title="View Portfolio"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
              <div className="flex flex-wrap space-x-2 sm:space-x-6">
                <div className="flex items-center text-xs text-gray-400 hover:text-purple">
                  <FaCode className="mr-2" /> Web Development
                </div>
                <div className="flex items-center text-xs text-gray-400 hover:text-blue-400">
                  <FaPaintBrush className="mr-2" /> UI/UX Design
                </div>
                <div className="flex items-center text-xs text-gray-400 hover:text-green-400">
                  <FaRocket className="mr-2" /> Digital Strategy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
