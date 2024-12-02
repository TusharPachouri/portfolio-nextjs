import React, { ReactNode } from "react";
import "./SolarWaveEffect.css";

// Define props type
interface SolarWaveEffectProps {
  children?: ReactNode; // Add this if you want to allow children
}

const SolarWaveEffect: React.FC<SolarWaveEffectProps> = ({ children }) => {
  return (
    <div className="solar-wave-container">
      <div className="solar-wave"></div>
      {children && <div className="overlay-content">{children}</div>}
    </div>
  );
};

export default SolarWaveEffect;
