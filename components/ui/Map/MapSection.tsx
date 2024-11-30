"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center border border-gray-300 rounded-lg shadow-lg bg-gray-100">
      Loading map...
    </div>
  ),
});

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

  return (
    <div className="p-4">
      <div
        className="relative w-full h-[500px] rounded-2xl bg-slate-600 overflow-hidden border-4 border-transparent  hover:border-gray-400 hover:border-6"
        // style={{
        //   background:
        //     "linear-gradient(135deg, rgba(0, 123, 255, 0.6), rgba(255, 0, 150, 0.6))",
        //   padding: "4px",
        // }}
      >
        <div className="w-full h-full rounded-xl border border-gray-200 shadow-xl overflow-hidden">
          <LeafletMap />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
