import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { FiLogOut } from 'react-icons/fi'

function LogoutBtn({ collapsed }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      navigate("/login")
    })
  }

  return (
    <button
      onClick={logoutHandler}
      className="flex items-center w-full px-4 py-2 text-left rounded-lg hover:bg-blue-500 transition-colors"
    >
      <span className="text-lg"><FiLogOut /></span>
      {!collapsed && <span className="ml-3 text-base">Logout</span>}
    </button>
  )
}

export default LogoutBtn
