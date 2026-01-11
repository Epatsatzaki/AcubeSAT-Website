import React, { useState } from 'react';

const InteractiveDiagram = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  // These coordinates are mapped to your payload image
  const hotspots = [
    { id: 1, top: '15%', left: '50%', label: 'Pressurized Housing', img: '/images/housing_detail.png' },
    { id: 2, top: '54%', left: '48%', label: 'Lab-on-a-chip', img: '/images/chip_detail.png' },
    { id: 3, top: '60%', left: '48%', label: 'Automated Fluidic System', img: '/images/fluidic_detail.png' },
    { id: 4, top: '65%', left: '52%', label: 'Autonomous Electronics System', img: '/images/electronics_detail.png' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gray-900/10 rounded-3xl p-4 border border-white/5">
      {/* Main Center Photo */}
      <div className="relative">
        <img 
          src="/images/payload1.png" 
          alt="AcubeSAT Payload" 
          className="w-full h-auto rounded-xl shadow-2xl"
        />

        {/* Hotspots */}
        {hotspots.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelectedImage(point.img)}
            onMouseEnter={() => setHoveredHotspot(point.id)}
            onMouseLeave={() => setHoveredHotspot(null)}
            className="absolute z-10 group"
            style={{ top: point.top, left: point.left }}
          >
            {/* Pulsing Effect */}
            <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200"></span>
            
            {/* Tooltip - Only shown when this specific hotspot is hovered */}
            {hoveredHotspot === point.id && (
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-[10px] rounded whitespace-nowrap z-50">
                {point.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Image Overlay (Modal) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <button className="absolute -top-12 right-0 text-white text-lg font-bold">Close ✕</button>
            <img src={selectedImage} alt="Detail" className="w-full h-auto rounded-lg" />
            <p className="text-center py-4 font-semibold text-gray-800 dark:text-gray-200">Click anywhere to return</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDiagram;