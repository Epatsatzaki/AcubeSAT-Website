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

    {/* Flowbite Timeline for Company History */}
    <Card className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Our Journey</h2>
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>2023</Timeline.Time>
              <Timeline.Title>SpaceDot Founded</Timeline.Title>
              <Timeline.Body>
                Started with a vision to advance space biology research through innovative satellite technology.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>2024</Timeline.Time>
              <Timeline.Title>AcubeSAT Development</Timeline.Title>
              <Timeline.Body>
                Began development of our first 3U+ CubeSat mission focused on space biology research.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>Future</Timeline.Time>
              <Timeline.Title>Launch & Research</Timeline.Title>
              <Timeline.Body>
                Preparing for launch and conducting groundbreaking research on microgravity effects.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </Card>

      {/* Flowbite Accordion for Technologies */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack</h2>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Frontend Technologies</Accordion.Title>
            <Accordion.Content>
              <div className="grid md:grid-cols-2 gap-4">
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
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Space Technology</Accordion.Title>
            <Accordion.Content>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• 3U+ CubeSat Design</li>
                <li>• Microgravity Research Systems</li>
                <li>• Radiation Shielding Technology</li>
                <li>• Biological Sample Preservation</li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Card>

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