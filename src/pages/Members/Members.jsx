// src/pages/Members/Members.jsx
const Members = () => {
    return (
      <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Our Team Members
          </h1>
  
          {/* Core Team Section */}
          <section id="core-team" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Team
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                The dedicated students leading our mission...
              </p>
            </div>
          </section>
  
          {/* Contributors Section */}
          <section id="contributors" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contributors
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Amazing collaborators from around the world...
              </p>
            </div>
          </section>
  
          {/* Alumni Section */}
          <section id="alumni">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Alumni
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Past team members who contributed to our success...
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Members;