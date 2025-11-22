import Card from '../../components/ui/Card'

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences.',
      icon: '🎨'
    },
    {
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      title: 'Consulting',
      description: 'Expert advice on technology stack, architecture, and development processes.',
      icon: '🔍'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We offer a comprehensive range of services to help bring your ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} hover className="p-6 text-center">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Services