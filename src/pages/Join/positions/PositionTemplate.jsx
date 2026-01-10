const PositionTemplate = ({ 
  title, 
  subtitle, 
  overview, 
  descriptionPoints, 
  skillsTitle, 
  skills, 
  notes,
  applicationLink 
}) => {
  return (
    <div className="min-h-screen pb-20 font-sans text-slate-900">
      {/* Header Section */}
      <div className="bg-[#0f172a] text-white pt-32 pb-16 px-6"> 
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Open Position
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            Overview
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-slate-100 pl-6 italic">
            {overview}
          </p>
        </section>

        <hr className="my-10 border-slate-100" />

        {/* Position Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Position Description</h2>
          <ul className="space-y-4">
            {descriptionPoints.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-[-2px]">•</span>
                <span className="text-slate-700">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Preferred Skills */}
        <section className="bg-slate-50 p-8 rounded-xl border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Preferred Skills and Education</h2>
          <p className="text-slate-600 mb-6 italic text-sm">
            {skillsTitle}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why You? Section */}
        {notes && (
          <section className="mb-12 p-8 rounded-xl bg-blue-50 border-l-8 border-blue-600">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Why You?</h2>
            <div className="text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
              {notes}
            </div>
          </section>
        )}

        {/* Application Button */}
        <div className="text-center pt-8">
          <a 
            href={applicationLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-200 uppercase tracking-wide text-sm"
          >
            Click here to submit your application
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PositionTemplate;