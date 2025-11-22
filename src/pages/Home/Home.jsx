import DynamicList from '../../components/dynamic/DynamicList'
import ToggleTheme from '../../components/dynamic/ToggleTheme'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex justify-end mb-4">
          <ToggleTheme />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built with React, Vite, Tailwind CSS, and Flowbite components
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card hover className="p-6 text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-primary-900">
            <span className="text-primary-600 dark:text-primary-400 text-xl">⚡</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Fast Setup</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Quickly set up your project with Vite and modern tooling.
          </p>
        </Card>

        <Card hover className="p-6 text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-primary-900">
            <span className="text-primary-600 dark:text-primary-400 text-xl">🎨</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Beautiful UI</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Styled with Tailwind CSS and Flowbite components.
          </p>
        </Card>

        <Card hover className="p-6 text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-primary-900">
            <span className="text-primary-600 dark:text-primary-400 text-xl">🔧</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Customizable</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Easy to customize and extend with your own components.
          </p>
        </Card>
      </div>

      {/* CTA Section */}
      <Card className="p-8 text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 opacity-90">
          Join thousands of developers building amazing websites with this stack.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
          <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </Card>

      {/* Dynamic Components Demo */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Dynamic Components Demo
        </h2>
        <DynamicList />
      </div>
    </div>
  )
}

export default Home