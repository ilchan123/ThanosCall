import React from "react"
import { Routes, Route } from "react-router-dom"
import Login_Page from "../pages/login"
import CallCenterPage from "../pages/call_center"

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Login_Page />} />
      <Route path="/call_center" element={<CallCenterPage />} />
    </Routes>
  )
}

export default Layout
