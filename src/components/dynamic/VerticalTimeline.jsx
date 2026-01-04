const TimelineRow = ({ item, index, isActive }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      style={{ height: `${ROW_HEIGHT}px` }}
      className={`relative flex items-center w-full snap-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="w-[calc(100%-4rem)] md:w-[42%] px-2">
        <motion.div 
          animate={{ 
            opacity: isActive ? 1 : 0.15,
            scale: isActive ? 1 : 0.98,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`p-4 rounded-xl border-2 transition-colors duration-500 ${
            isActive 
              ? 'border-blue-500/40 bg-white dark:bg-slate-900 shadow-xl shadow-blue-500/10' 
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* THE TEXT CHANGES BELOW */}
          
          {/* Year/Date: Bold, Smaller, Blue Accent */}
          <div className={`font-bold text-[13px] tracking-tight mb-0.5 transition-colors duration-500 ${
            isActive ? 'text-blue-500 dark:text-blue-400' : 'text-slate-500'
          }`}>
            {item.year}
          </div>

          {/* Title: Large, Very Bold/Extrabold */}
          <h4 className={`text-xl font-extrabold leading-tight transition-colors duration-500 ${
            isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600'
          }`}>
            {item.title}
          </h4>

          {/* Description: Dimmed, Smaller, Spaced out */}
          <p className={`mt-2 text-[14px] leading-relaxed transition-all duration-300 ${
            isActive ? 'text-slate-500 dark:text-slate-400 opacity-100' : 'opacity-0'
          }`}>
            {item.desc}
          </p>
          
          {/* END OF TEXT CHANGES */}
        </motion.div>
      </div>

      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: isActive ? 1.4 : 1, 
            backgroundColor: isActive ? '#2563eb' : '#cbd5e1',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-3 h-3 rounded-full z-20 border-2 border-white dark:border-slate-900"
        />
      </div>
    </div>
  );
};