import React from 'react'
import { Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiHome, FiLogIn, FiUserPlus, FiFileText, FiPlusCircle } from 'react-icons/fi'
import 'boxicons/css/boxicons.min.css';


function Header({ collapsed, setCollapsed }) {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', 
      slug: '/', 
      active: true, 
      icon: <FiHome /> 
    },
    { name: 'Login', 
      slug: '/login', 
      active: !authStatus, 
      icon: <FiLogIn /> 
    },
    { name: 'Signup', 
      slug: '/signup', 
      active: !authStatus, 
      icon: <FiUserPlus /> 
    },
    { name: 'All Posts', 
      slug: '/all-posts', 
      active: authStatus, 
      icon: <FiFileText /> 
    },
    { name: 'Add Post', 
      slug: '/add-post', 
      active: authStatus, 
      icon: <FiPlusCircle /> 
    }
  ]

  return (
    <div
      className={`${
        collapsed ? 'w-30' : 'w-60'
      } fixed top-0 left-0 h-full px-10px py-14px bg-slate-600 flex flex-col`}
    >
      {/* Logo + Toggle Button */}
      <div className="flex items-center">
        <span className="mw-60px flex items-center">
          <Link to="/">
            <img src="../public/logo1_1.png" alt="logo" className={`${
              collapsed ? ("size-16 ml-1") : ("size-16 ml-5")
            } mt-3 transition-all duration-300 rounded-[50%]`} />
          </Link>
        </span>
        {collapsed ? '' : (
          <Link to="/">
            <span className="font-barriecito font-black text-gray-300 text-5xl italic flex ml-3 mt-3">BlogX</span>
          </Link>
        )}
        {collapsed ? (
        <i onClick={() => setCollapsed(!collapsed)} class='bx bx-chevron-right absolute right-[-8px] w-30px h-30px translate-y-[-2/4] bg-blue-500 flex items-center justify-center rounded-xl size-20px mt-3' ></i>
        ) : (
        <i onClick={() => setCollapsed(!collapsed)} class='bx bx-chevron-left absolute right-[-8px] w-30px h-30px translate-y-[-2/4] bg-blue-500 flex items-center justify-center rounded-xl text-white size-20px mt-3' ></i>
        )}

      </div>
      

      {/* Navigation Items */}
      <nav className="px-2 py-6 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="flex items-center w-full px-4 py-2 text-left rounded-lg text-gray-200 hover:bg-blue-400 transition-colors hover:text-gray-800"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {!collapsed && <span className="ml-3 text-base">{item.name}</span>}
                  </button>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* Bottom: Logout */}
      {authStatus && (
        <div className="p-4 mt-auto text-gray-200 hover:text-gray-800">
          <LogoutBtn collapsed={collapsed} />
        </div>
      )}
      <div></div>
    </div>
  )
}

export default Header
