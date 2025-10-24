import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, deleteCategory, editCategory } from '../../store/categoriesSlice'
import Button from '../../ui/Button'
import { IoIosOptions } from 'react-icons/io'
import Plus from '../../assets/plus.svg?react'

import Edit from '../../assets/edit.svg?react'
import Modal from '../../ui/Modal'
import Input from '../../ui/Input'

const CategoryManager = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.items)
  const [title, setTitle] = useState('')
  const [isAddModalOpen, setAddModalOpen] = useState(false)
  const [isEditModalOpen, setEditModalOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [currentEditId, setCurrentEditId] = useState(null)

  const handleAdd = () => {
    if (!title.trim()) return
    dispatch(addCategory({ title }))
    setTitle('')
  }

  const handleDelete = () => {
    if (!currentEditId) return
    dispatch(deleteCategory(currentEditId))
    setCurrentEditId(null)
    setEditModalOpen(false)
  }

  const handleEdit = () => {
    if (!title.trim() || !currentEditId) return
    dispatch(editCategory({ id: currentEditId, changes: { title: title.trim() } }))
    setTitle('')
    setCurrentEditId(null)
    setEditModalOpen(false)
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
          onClick={() => setAddModalOpen(true)}
          className="border-2 border-dashed border-accent p-4 w-full h-75 text-accent col-center rounded-lg gap-5.5"
        >
          <Plus className="text-accent size-5" />
          <span className="font-semibold">Add New</span>
        </button>
        {categories.map(cat => (
          <li
            key={cat.id}
            className="border-2 border-border p-4 w-55 h-75  col-center rounded-lg gap-5.5 relative overflow-hidden"
          >
            <span>{cat.title}</span>
            {edit && (
              <Button
                onClick={() => {
                  setCurrentEditId(cat.id)
                  setTitle(cat.title)
                  setEditModalOpen(true)
                }}
                variant="edit"
              >
               <Edit className=" size-4 mr-2" /> Edit Category
              </Button>
            )}
          </li>
        ))}
      </div>

      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Edit category name"
            className="w-full"
            styles="flex-1 w-full"
          />
          <div className="flex gap-3 self-end">
            <Button onClick={() => handleEdit()} className="px-6" variant='set'>Save</Button>
            <Button onClick={() => handleDelete()} className="px-5" variant='alt'>
              Delete
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)}>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter category name"
            className="w-full"
            styles="flex-1 w-full"
          />
          <Button onClick={handleAdd} className="w-fit px-6 self-end" variant='set'>
            <Plus className="size-4 mr-2" />
            Add New
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default CategoryManager
