// src/pages/Contact/Contact.jsx
const Contact = () => {
    return (
      <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get in touch with the AcubeSAT team. We'd love to hear from you!
            </p>
          </div>
  
          {/* General Inquiry Section */}
          <section id="general-inquiry" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                General Inquiry
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions about our project, mission, or activities? Reach out to us!
              </p>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Email:</p>
                <p className="text-primary-600 dark:text-primary-400">info@acubesat.com</p>
              </div>
            </div>
          </section>
  
          {/* Collaboration Section */}
          <section id="collaboration" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Collaboration Opportunities
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in partnering with us or exploring collaborative research opportunities?
              </p>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Collaboration Email:</p>
                <p className="text-primary-600 dark:text-primary-400">collaborations@acubesat.com</p>
              </div>
            </div>
          </section>
  
          {/* Media & Press Section */}
          <section id="media" className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Media & Press
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For press inquiries, interviews, or media partnerships.
              </p>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Media Contact:</p>
                <p className="text-primary-600 dark:text-primary-400">media@acubesat.com</p>
              </div>
            </div>
          </section>
  
          {/* Technical Support Section */}
          <section id="technical">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For technical questions about our systems, software, or open-source resources.
              </p>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Technical Support:</p>
                <p className="text-primary-600 dark:text-primary-400">tech@acubesat.com</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Response time: 2-3 business days
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default Contact;