import Card from '../../components/ui/Card'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We are a passionate team dedicated to building amazing web experiences 
            using modern technologies like React, Vite, and Tailwind CSS.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            To create beautiful, performant, and accessible web applications that 
            provide exceptional user experiences across all devices and platforms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technologies We Use</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• React & Vite</li>
              <li>• Tailwind CSS</li>
              <li>• Flowbite Components</li>
              <li>• Modern JavaScript (ES6+)</li>
            </ul>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Responsive Design</li>
              <li>• Dark Mode Support</li>
              <li>• Component-Based Architecture</li>
              <li>• Best Practices</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default About