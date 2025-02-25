import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/login"
import CallCenterPage from "../pages/call_center"
import { UserProvider } from "../context/UserContext"

const Layout = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/call_center" element={<CallCenterPage />} />
      </Routes>
    </UserProvider>
  )
}

export default Layout
