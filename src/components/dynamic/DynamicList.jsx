import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const DynamicList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'This is the first item' },
    { id: 2, name: 'Item 2', description: 'This is the second item' },
  ])

  const [newItem, setNewItem] = useState({ name: '', description: '' })

  const addItem = () => {
    if (newItem.name.trim() && newItem.description.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        name: newItem.name, 
        description: newItem.description 
      }])
      setNewItem({ name: '', description: '' })
    }
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Add New Item</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter item name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter item description"
              rows="3"
            />
          </div>
          <Button onClick={addItem}>
            Add Item
          </Button>
        </div>
      </Card>

      <div className="grid gap-4">
        {items.map((item) => (
          <Card key={item.id} hover className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {items.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No items yet. Add some items to get started!</p>
        </Card>
      )}
    </div>
  )
}

export default DynamicList