import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory } from '../../store/categoriesSlice'
import Button from '../../ui/Button'
import { IoIosOptions } from 'react-icons/io'
import Logo from '../../assets/plus.svg?react'
import Modal from '../../ui/Modal'
import Input from '../../ui/Input'

const CategoryManager = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.items)
  const [title, setTitle] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const handleAdd = () => {
    if (!title.trim()) return
    dispatch(addCategory({ title }))
    setTitle('')
  }

  const handleDelete = id => {
    dispatch(deleteCategory(id))
  }

  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Button onClick={() => setEdit(!edit)} variant="set">
          <IoIosOptions className="size-6 mr-2" /> Manage Categories
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 overflow-y-auto overflow-x-hidden max-h-[70vh] no-scrollbar">
        <button
          onClick={() => setModalOpen(true)}
          className="border-2 border-dashed border-accent p-4 w-full h-75 text-accent col-center rounded-lg gap-5.5"
        >
          <Logo className="text-accent size-5" />
          <span className="font-semibold">Add new</span>
        </button>
        {categories.map(cat => (
          <li
            key={cat.id}
            className="border-2 border-border p-4 w-55 h-75 text-accent col-center rounded-lg gap-5.5 relative overflow-hidden"
          >
            <span>{cat.title}</span>
            {edit && (
              <Button onClick={() => handleDelete(cat.id)} variant='edit'>
                Edit Category
              </Button>
            )}
          </li>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex gap-2 w-full">
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter category name"
            className="w-full"
            styles="flex-1 w-full"
          />
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </Modal>
    </div>
  )
}

export default CategoryManager
