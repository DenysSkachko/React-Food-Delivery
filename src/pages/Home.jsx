import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PageHeader from '../shared/PageHeader'
import Select from '../ui/Select'
import Card from '../ui/Card'

const Home = () => {
  const categories = useSelector(state => state.categories.items)
  const [active, setActive] = useState(null)
  return (
    <>
      <div className="max-w-170 p-6">
        <PageHeader title="Home" isDate isSearch />

        <div className="flex gap-8 mt-6 text-sm overflow-x-auto no-scrollbar border-b-2 border-[#393C49]">
          {categories.length > 0 ? (
            categories.map(cat => (
              <span
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`cursor-pointer transition-colors pb-2 border-b-3 ${
                  active === cat.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-300 hover:text-white'
                }`}
              >
                {cat.title}
              </span>
            ))
          ) : (
            <p className="text-gray-400">No categories yet</p>
          )}
        </div>

        <div className="mt-6 flex justify-between">
          <h2 className="font-semibold text-xl">Choose Dishes</h2>
          <Select
            options={[
              { label: 'Dine In', value: 'pizza' },
              { label: 'To Go', value: 'coffee' },
              { label: 'Delivery', value: 'dessert' },
            ]}
          />
        </div>

        <div className="grid grid-cols-3 gap-7 mt-6">
          <Card name="Spicy seasoned seafood noodles" price="$ 2.29" text="20 Bowls available" />
          <Card name="Spicy seasoned seafood noodles" price="$ 2.29" text="20 Bowls available" />
          <Card name="Spicy seasoned seafood noodles" price="$ 2.29" text="20 Bowls available" />
          <Card name="Spicy seasoned seafood noodles" price="$ 2.29" text="20 Bowls available" />
          <Card name="Spicy seasoned seafood noodles" price="$ 2.29" text="20 Bowls available" />
          <Card name="Spicy seasoned seafood noodles" price="$ 2.29" text="20 Bowls available" />
        </div>
      </div>
      <div className="max-w-102 bg-dark h-full w-full p-6">
        <h2 className="font-semibold text-xl">Orders #34562</h2>

        <button>Dine In</button>
      </div>
    </>
  )
}

export default Home
