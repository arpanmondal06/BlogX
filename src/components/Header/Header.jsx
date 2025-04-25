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
      } fixed top-0 left-0 h-full px-10px py-14px bg-transparent flex flex-col`}
    >
      {/* Logo + Toggle Button */}
      <div className="flex items-center">
        <span className="mw-60px flex items-center">
          <Link to="/">
            <img src="../public/logo.png" alt="logo" className={`${
              collapsed ? ("size-20") : ("size-36")
            } transition-all duration-300`} />
          </Link>
        </span>
        {collapsed ? '' : (
          <span className="text-16px font-medium flex">BlogX</span>
        )}
        {collapsed ? (
        <i onClick={() => setCollapsed(!collapsed)} class='bx bx-chevron-right absolute right-[-8px] w-30px h-30px translate-y-[-2/4] bg-blue-500 flex items-center justify-center rounded-xl text-white size-20px' ></i>
        ) : (
        <i onClick={() => setCollapsed(!collapsed)} class='bx bx-chevron-left absolute right-[-8px] w-30px h-30px translate-y-[-2/4] bg-blue-500 flex items-center justify-center rounded-xl text-white size-20px' ></i>
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
                    className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-blue-400 transition-colors"
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
        <div className="p-4 mt-auto">
          <LogoutBtn collapsed={collapsed} />
        </div>
      )}
      <div></div>
    </div>
  )
}

export default Header
