import { Card, Timeline, Accordion, Alert } from 'flowbite-react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Flowbite Alert for welcome message */}
      <Alert color="info" className="mb-6">
        <span className="font-medium">Welcome to SpaceDot!</span> Learn more about our mission and technology stack.
      </Alert>

      {/* Your existing Card with Flowbite Card */}
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
        </div>
      </Card>

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

      {/* Team Values Section */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
              <span className="text-blue-600 dark:text-blue-400 text-xl">🚀</span>
            </div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pushing boundaries in space technology</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-green-900">
              <span className="text-green-600 dark:text-green-400 text-xl">🎓</span>
            </div>
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Student-led research and development</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 dark:bg-purple-900">
              <span className="text-purple-600 dark:text-purple-400 text-xl">🌍</span>
            </div>
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">International partnerships in space research</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default About