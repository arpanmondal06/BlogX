import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer({ collapsed }) {
  return (
    <footer
      className={`bg-transparent mt-10 transition-all duration-300 ${
        collapsed ? 'ml-20' : 'ml-60'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="-m-6 flex flex-wrap">
          {/* Logo Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()}. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">Company</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Features</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Pricing</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Affiliate Program</Link></li>
              <li><Link to="/" className="hover:text-gray-700">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">Support</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Account</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Help</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-gray-700">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500">Legals</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Terms & Conditions</Link></li>
              <li className="mb-2"><Link to="/" className="hover:text-gray-700">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-gray-700">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
