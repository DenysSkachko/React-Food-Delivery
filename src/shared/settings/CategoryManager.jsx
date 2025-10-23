import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory } from '../../store/categoriesSlice'

const CategoryManager = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.items)
  const [title, setTitle] = useState('')

  const handleAdd = () => {
    if (!title.trim()) return
    dispatch(addCategory({ title }))
    setTitle('')
  }

  const handleDelete = id => {
    dispatch(deleteCategory(id))
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-dark rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Categories</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter category name"
          className="flex-1 p-2 bg-dark-alt border border-gray-600 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-accent text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {categories.map(cat => (
          <li
            key={cat.id}
            className="flex justify-between items-center bg-dark-alt text-white p-2 rounded"
          >
            <span>{cat.title}</span>
            <button
              onClick={() => handleDelete(cat.id)}
              className="text-accent"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryManager
