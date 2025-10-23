import { createSlice, nanoid } from '@reduxjs/toolkit'

const STORAGE_KEY = 'categories'

const defaultCategories = [
  { id: nanoid(), title: 'Hot Dishes', createdAt: Date.now() },
  { id: nanoid(), title: 'Cold Dishes', createdAt: Date.now() },
  { id: nanoid(), title: 'Soup', createdAt: Date.now() },
  { id: nanoid(), title: 'Appetizer', createdAt: Date.now() },
  { id: nanoid(), title: 'Dessert', createdAt: Date.now() },
  { id: nanoid(), title: 'Grill', createdAt: Date.now() },
]

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultCategories
    return JSON.parse(raw)
  } catch (err) {
    console.error(err.message)
    return defaultCategories
  }
}

const saveToStorage = data => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (err) {
    console.error(err.message)
  }
}

const initialState = {
  items: loadFromStorage(),
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: {
      reducer(state, action) {
        state.items.push(action.payload)
        saveToStorage(state.items)
      },
      prepare({ title }) {
        return {
          payload: {
            id: nanoid(),
            title: title.trim(),
            createdAt: Date.now(),
          },
        }
      },
    },
    editCategory(state, action) {
      const { id, changes } = action.payload
      const idx = state.items.findIndex(c => c.id === id)
      if (idx !== -1) {
        state.items[idx] = { ...state.items[idx], ...changes }
        saveToStorage(state.items)
      }
    },
    deleteCategory(state, action) {
      const id = action.payload
      state.items = state.items.filter(c => c.id !== id)
      saveToStorage(state.items)
    },
    setCategories(state, action) {
      state.items = action.payload
      saveToStorage(state.items)
    },
    clearCategories(state) {
      state.items = []
      saveToStorage(state.items)
    },
  },
})

export const {
  addCategory,
  editCategory,
  deleteCategory,
  setCategories,
  clearCategories,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;