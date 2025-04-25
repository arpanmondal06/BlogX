import React from 'react'

function Container({ children, collapsed }) {
  return (
    <div
      className={`transition-all duration-300 min-h-screen ${
        collapsed ? 'ml-20' : 'ml-60'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  )
}

export default Container
