import React, { useState } from 'react'
import PageHeader from '../shared/PageHeader'

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: 'Appearance',
      text: 'Dark and Light mode, Font size',
      content: <div className="p-6">1</div>,
    },
    {
      label: 'Your Restaurant',
      text: 'Manage name, address, and info',
      content: <div className="p-6">1</div>,
    },
    {
      label: 'Products Management',
      text: 'Manage your products, pricing, etc',
      content: <div className="p-6">1</div>,
    },
  ]

  return (
    <div className="p-6 flex flex-col w-full h-full gap-6">
      <PageHeader title="Settings" />

      <div className="flex flex-1 gap-6">
        <div className="bg-dark w-69 rounded-lg overflow-hidden">
          <ul>
            {tabs.map((t, i) => (
              <li
                key={t.label}
                onClick={() => setActiveTab(i)}
                className={`p-6 cursor-pointer transition-colors ${
                  activeTab === i ? 'bg-accent/30 text-accent' : 'hover:bg-accent/20'
                }`}
              >
                <p className="text-sm font-medium">{t.label}</p>
                <p className="text-light-alt text-xs">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-dark flex-1 rounded-lg">{tabs[activeTab].content}</div>
      </div>
    </div>
  )
}

export default Settings
