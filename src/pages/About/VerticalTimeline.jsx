import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const ROW_HEIGHT = 250;

const timelineData = [
  { year: "Q1 2020", title: "Accepted in ESA's 'Fly Your Satellite!' program", desc: "Selected for the prestigious European Space Agency educational program." },
  { year: "Q4 2021", title: "Passed Critical Design Review", desc: "Technical validation of the satellite's design and mission objectives (>1000 technical pages)." },
  { year: "Q1 2022 - Q2 2024", title: "Qualified 2 Subsystems", desc: "Successful testing of critical communication and power modules for space flight." },
  { year: "Q3 2025", title: "System Level Testing", desc: "Environmental and flight qualification of the integrated satellite." },
  { year: "Q1 2025 - Q2 2025", title: "Qualification of the Payload", desc: "Scientific instruments verified for the harsh space environment - VIBE Qualified!" },
  { year: "Q1 2027", title: "AcubeSAT in Orbit", desc: "Launch and deployment into Low Earth Orbit." },
  { year: "Q2 2027 - Q2 2028", title: "Mission Operations", desc: "Data collection and biological experiment runs." }
];

const VerticalTimeline = () => {
  const scrollableRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    container: scrollableRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalItems = timelineData.length;
    const nextIndex = Math.min(
      totalItems - 1,
      Math.max(0, Math.floor(latest * totalItems))
    );

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  });

  useEffect(() => {
    const el = scrollableRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        return;
      }
      e.stopPropagation();
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const rocketTop = activeIndex * ROW_HEIGHT + ROW_HEIGHT / 2;

  return (
    <div 
      className="relative w-full py-10 flex justify-center items-center bg-cover bg-center bg-fixed rounded-[2.5rem] overflow-hidden"
      style={{ backgroundImage: "url('/images/sky.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-950/40 z-0" />

      <div 
        ref={scrollableRef}
        className="relative z-10 w-full max-w-5xl h-[600px] overflow-y-auto overflow-x-hidden bg-transparent scroll-smooth hide-scrollbar"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        <div 
          className="px-6 relative" 
          style={{ height: `${timelineData.length * ROW_HEIGHT}px` }}
        >
          {/* Vertical Line */}
          <div 
            className="absolute left-8 md:left-1/2 w-0.5 bg-white/10 -translate-x-1/2 z-0" 
            style={{ 
              top: `${ROW_HEIGHT / 2}px`, 
              height: `${(timelineData.length - 1) * ROW_HEIGHT}px` 
            }}
          />

          {/* Rocket */}
          <motion.div 
            initial={false}
            animate={{ y: rocketTop }}
            transition={{ type: "spring", stiffness: 100, damping: 25, mass: 0.5 }}
            style={{ x: "-50%", top: 0 }}
            className="absolute left-8 md:left-1/2 -translate-y-1/2 z-20 text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.8)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
              <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>
          </motion.div>

          <div className="relative z-10"> 
            {timelineData.map((item, index) => (
              <TimelineRow
                key={index}
                item={item}
                index={index}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineRow = React.memo(({ item, index, isActive }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      style={{ height: `${ROW_HEIGHT}px` }}
      className={`relative flex items-center w-full snap-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-[calc(100%-4rem)] md:w-[42%] px-2">
        <motion.div 
          initial={false}
          animate={{ 
            opacity: isActive ? 1 : 0.2, 
            scale: isActive ? 1 : 0.98,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
          className={`p-6 rounded-xl min-h-[140px] flex flex-col justify-center ${
            isActive ? 'bg-slate-900/60 shadow-xl shadow-blue-500/5' : 'bg-transparent'
          }`}
        >
          <div className={`font-bold text-[12px] mb-1 ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
            {item.year}
          </div>

          <h4 className={`text-lg font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-600'}`}>
            {item.title}
          </h4>

          <div className="relative mt-2 min-h-[60px]">
            <motion.p
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[14px] text-slate-300 leading-snug"
            >
              {item.desc}
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
        <motion.div 
          initial={false}
          animate={{ 
            scale: isActive ? 1.2 : 1, 
            backgroundColor: isActive ? '#2563eb' : '#334155',
          }}
          transition={{ duration: 0.25 }}
          className="w-3 h-3 rounded-full z-20 border-2 border-slate-900"
        />
      </div>
    </div>
  );
});

export default VerticalTimeline;
