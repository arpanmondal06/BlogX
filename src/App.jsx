import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './components/container/Container'

function App() {
  const [loading, setLoading] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex bg-[url()] bg-no-repeat bg-blend-normal">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex flex-col flex-1">
        <Container collapsed={collapsed}>
          <Outlet />
        </Container>
        <Footer collapsed={collapsed} />
      </div>
    </div>
  ) : null
}

export default App
