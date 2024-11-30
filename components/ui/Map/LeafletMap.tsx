"use client";

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Necessary imports for marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const LeafletMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure we're only running on the client
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    // Fix for default marker icons
    let DefaultIcon = L.icon({
      iconUrl: icon.src,
      shadowUrl: iconShadow.src,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // Create map
    const map = L.map(mapContainerRef.current).setView([27.4924, 77.6737], 12);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add marker
    const marker = L.marker([27.4924, 77.6737])
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; background-color: #f7f7f7; padding: 20px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); max-width: 400px; margin: 0 auto;">
            <h3 style="font-family: 'Arial', sans-serif; font-size: 18px; color: #2d3a3a; margin-bottom: 10px;">
                Mathura, India
            </h3>
            <p style="font-family: 'Verdana', sans-serif; font-size: 14px; color: #555; line-height: 1.6; margin-top: 0;">
                Feel free to reach out! I'm always open to new opportunities and collaborations. :)
            </p>
        </div>

      `)
      .openPopup();

    // Cleanup
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ 
        width: '100%', 
        height: '500px', 
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
      className="border border-blue-400"
    />
  );
};

export default LeafletMap;