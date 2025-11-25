// src/pages/Support/Support.jsx
const Support = () => {
    return (
      <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Support Our Mission
          </h1>
  
          {/* Why Support Us Section */}
          <section id="why-support" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Support Us?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Your support enables groundbreaking student-led space research and helps 
                train the next generation of scientists and engineers.
              </p>
            </div>
          </section>
  
          {/* Sponsors Section */}
          <section id="sponsors" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Sponsors
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Amazing organizations supporting our mission...
              </p>
            </div>
          </section>
  
          {/* Get Involved Section */}
          <section id="get-involved">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get Involved
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Various ways you can contribute to our project...
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Support;