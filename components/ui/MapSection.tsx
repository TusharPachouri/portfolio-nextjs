"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

// Custom marker icon with better styling
const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-map-marker",
    html: `
      <div class="relative">
        
          <path 
            fillRule="evenodd" 
            d="M11.54 22.351l.007.01l.002.004l.007.010l.022.034l.094.138c.82.997 2.142 1.466 2.853.462c1.023-1.322 2.643-2.875 3.374-4.246c1.638-2.665 1.636-5.438 0-8.11c-1.633-2.666-4.285-4.037-6.861-3.56V4a2 2 0 1 0-4 0v.635C6.445 4.262 4.904 5.6 3.62 7.08C1.246 9.629 0 12.758 0 16c0 3.252 1.65 6.445 4.012 8.898c.654.662 1.578 1.102 2.605 1.102h11.766c1.027 0 1.95-.44 2.605-1.102C23.35 22.445 25 19.252 25 16c0-3.242-1.625-6.395-3.996-8.932a1.464 1.464 0 0 0-2.008 0C17.626 9.605 16 12.758 16 16a6.6 6.6 0 0 0 .862 3.334c.533.908-.217 1.666-1.222 1.666H6.36c-1.005 0-1.755-.758-1.222-1.666A6.6 6.6 0 0 0 6 16c0-3.242-1.625-6.395-3.996-8.932a1.464 1.464 0 0 0-2.008 0C0 9.605-1.625 12.758-1.625 16c0 3.252 1.65 6.445 4.012 8.898c.654.662 1.578 1.102 2.605 1.102h11.766c1.027 0 1.95-.44 2.605-1.102C21.35 22.445 23 19.252 23 16c0-3.242-1.625-6.395-3.996-8.932a1.464 1.464 0 0 0-2.008 0z" 
            clipRule="evenodd" 
          />
        </svg>
        <span 
          className="absolute -top-3 -right-3 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs"
        >
          1
        </span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

// Mathura Location Coordinates
const mathuraCoordinates = {
  lat: 27.4924,  // Latitude for Mathura
  lng: 77.6737,  // Longitude for Mathura
};

const MapSection: React.FC = () => {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
      <MapContainer
        center={mathuraCoordinates}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
        className="z-10"
      >
        {/* Use a more visually appealing tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="filter brightness-95"
        />
        
        {/* Add a marker with custom icon */}
        <Marker 
          position={mathuraCoordinates} 
          icon={createCustomIcon()}
        >
          <Popup 
            className="custom-popup rounded-xl shadow-lg bg-white"
            closeButton={false}
          >
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Mathura, India
              </h3>
              <p className="text-gray-600">
                Ancient city of cultural and religious significance
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-blue-500" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Latitude: {mathuraCoordinates.lat}, Longitude: {mathuraCoordinates.lng}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;
