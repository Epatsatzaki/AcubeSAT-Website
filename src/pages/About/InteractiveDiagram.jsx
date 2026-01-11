import React, { useState } from 'react';

const InteractiveDiagram = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  // Data for each component
  const hotspots = [
    { 
      id: 1, 
      top: '15%', 
      left: '50%', 
      label: 'Pressurized Housing', 
      img: '/images/interractiveDiagram/container.png', 
      description: 'Maintains a constant 1 atm pressure and protects biological samples from the vacuum of space, ensuring a stable environment for experiment success.'
    },
    { 
      id: 2, 
      top: '54%', 
      left: '48%', 
      label: 'Lab-on-a-chip', 
      img: 'public/images/interractiveDiagram/lab-on-a-chip.png', 
      description: 'The core biological interface where micro-channels guide nutrients to cells, allowing for real-time monitoring of biological growth in microgravity.'
    },
    { 
      id: 3, 
      top: '60%', 
      left: '48%', 
      label: 'Automated Fluidic System', 
      img: '/images/interractiveDiagram/fluidics.png', 
      description: 'A complex network of micro-pumps and valves that precisely manages the lifecycle of the experiment by injecting reagents at specific intervals.'
    },
    { 
      id: 4, 
      top: '65%', 
      left: '52%', 
      label: 'Autonomous Electronics System', 
      img: 'public/images/interractiveDiagram/gkogopcb.png', 
      description: 'Responsible for power distribution, thermal regulation, and high-speed data acquisition. It acts as the primary interface between the payload and the satellite bus.'
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-gray-900/10 rounded-3xl p-4 border border-white/5 shadow-inner">
      {/* Main Center Photo */}
      <div className="relative">
        <img 
          src="/images/interractiveDiagram/payload1.png" 
          alt="AcubeSAT Payload" 
          className="w-full h-auto rounded-xl shadow-2xl"
        />

        {/* Hotspots Mapping */}
        {hotspots.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelectedComponent(point)} // Fixed: Passing the whole object
            onMouseEnter={() => setHoveredHotspot(point.id)}
            onMouseLeave={() => setHoveredHotspot(null)}
            className="absolute z-10 group cursor-pointer focus:outline-none"
            style={{ top: point.top, left: point.left }}
          >
            {/* Pulsing Effect */}
            <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200"></span>
            
            {/* Tooltip */}
            {hoveredHotspot === point.id && (
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-[10px] font-medium rounded-md whitespace-nowrap z-50 border border-white/10 shadow-xl">
                {point.label}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Detail Overlay (Modal) */}
      {selectedComponent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedComponent(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 border border-white/20 overflow-hidden rounded-3xl shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Image Section */}
            <div className="md:w-2/3 bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
              <img 
                src={selectedComponent.img} 
                alt={selectedComponent.label} 
                className="w-full h-full object-contain max-h-[40vh] md:max-h-[70vh]" 
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/3 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
                {selectedComponent.label}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {selectedComponent.description}
              </p>
              
              <button 
                onClick={() => setSelectedComponent(null)}
                className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-900/20 active:scale-95 w-fit"
              >
                Return to Diagram
              </button>
            </div>

            {/* Close Button Top Right (Optional for accessibility) */}
            <button 
              onClick={() => setSelectedComponent(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDiagram;