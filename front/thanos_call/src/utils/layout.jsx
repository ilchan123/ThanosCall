import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/login"
import CallCenterPage from "../pages/call_center"
import { UserProvider } from "../context/UserContext"
import UserDataStaticsChart from "../components/charts/UserDataStaticsChart"
import PrdDataStaticsChart from "../components/charts/PrdDataStaticsChart"
import CallInfoStaticsChart from "../components/charts/CallInfoStaticsChart"
import CSStaticsChart from "../components/charts/CSStaticsChart"
import DataFrame from "../components/cs_list_manage/data_frame"

const Layout = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/call_center" element={<CallCenterPage />}>
          <Route path="data/user_ds" element={<UserDataStaticsChart />} />
          <Route path="data/product_ds" element={<PrdDataStaticsChart />} />
          <Route path="data/callInfo_ds" element={<CallInfoStaticsChart />} />
          <Route path="data/cs_statics" element={<CSStaticsChart />} />
          <Route path="data/all" element={<DataFrame />} />
          <Route path="data/order_log" element={<DataFrame />} />
          <Route path="data/member_info" element={<DataFrame />} />
          <Route path="data/currency_log" element={<DataFrame />} />
          <Route path="data/product_log" element={<DataFrame />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default Layout
