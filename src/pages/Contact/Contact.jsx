import { useState } from 'react'
import { Modal, Alert, Card, Button, TextInput, Textarea, Label } from 'flowbite-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Handle form submission here
    console.log('Form submitted:', formData)
    
    // Show success alert
    setShowAlert(true)
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
    
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Flowbite Alert for success message */}
      {showAlert && (
        <Alert color="success" onDismiss={() => setShowAlert(false)} className="mb-6">
          <span className="font-medium">Thank you for your message!</span> We'll get back to you soon.
        </Alert>
      )}

      {/* Flowbite Card */}
      <Card className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
          
          {/* Flowbite Button for Modal Trigger */}
          <Button 
            color="light" 
            onClick={() => setShowModal(true)}
            className="text-sm"
          >
            Quick Info
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* Flowbite Label */}
            <Label htmlFor="name" value="Name" className="mb-1" />
            {/* Flowbite TextInput */}
            <TextInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="email" value="Email" className="mb-1" />
            <TextInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="message" value="Message" className="mb-1" />
            {/* Flowbite Textarea */}
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Your message..."
              className="w-full"
            />
          </div>

          {/* Flowbite Submit Button */}
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
            isProcessing={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Card>

      {/* Flowbite Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Contact Information</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-400">contact@spacedot.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Response Time</h4>
              <p className="text-gray-600 dark:text-gray-400">We typically respond within a week</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Contact