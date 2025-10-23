import React from 'react'
import PageHeader from '../shared/PageHeader'
import Select from '../ui/Select'
import Card from '../ui/Card'

const Home = () => {
  return (
    <>
      <div className="max-w-170 p-6">
        <PageHeader title="Home" isDate isSearch />

        <div className="flex gap-8 mt-6 text-sm">
          <span>Hot Dishes</span>
          <span>Cold Dishes</span>
          <span>Soup</span>
          <span>Appetizer</span>
          <span>Dessert</span>
          <span>Grill</span>
        </div>

        <div className="h-px rounded-lg bg-[#393C49] mt-3" />

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
