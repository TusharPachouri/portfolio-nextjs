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
        <div style="text-align: center;">
          <h3>Mathura, India</h3>
          <p>Ancient city of cultural and religious significance</p>
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
      className="border border-gray-300"
    />
  );
};

export default LeafletMap;