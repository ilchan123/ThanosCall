import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/login"
import CallCenterPage from "../pages/call_center"

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/call_center" element={<CallCenterPage />} />
    </Routes>
  )
}

export default Layout
