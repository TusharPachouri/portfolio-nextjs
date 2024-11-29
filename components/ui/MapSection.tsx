"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(
  () => import('./LeafletMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] flex items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-gray-100">
        Loading map...
      </div>
    )
  }
);

const MapSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-gray-100">
        Loading map...
      </div>
    );
  }

  return <LeafletMap />;
};

export default MapSection;