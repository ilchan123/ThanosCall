import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/login"
import CallCenterPage from "../pages/call_center"
import { UserProvider } from "../context/UserContext"
import UserDataStaticsChart from "../components/cs_data_analysis/charts/UserDataStaticsChart"
import PrdDataStaticsChart from "../components/cs_data_analysis/charts/PrdDataStaticsChart"
import CallInfoStaticsChart from "../components/cs_data_analysis/charts/CallInfoStaticsChart"
import CSStaticsChart from "../components/cs_data_analysis/charts/CSStaticsChart"
import All from "../components/cs_data_analysis/chart_view/all"
import CallLog from "../components/cs_data_analysis/chart_view/call_log"
import MemberInfo from "../components/cs_data_analysis/chart_view/member_info"
import OrderLog from "../components/cs_data_analysis/chart_view/order_log"
import ProductLog from "../components/cs_data_analysis/chart_view/product_log"

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
          <Route path="data/all" element={<All />} />
          <Route path="data/order_log" element={<OrderLog />} />
          <Route path="data/member_info" element={<MemberInfo />} />
          <Route path="data/call_log" element={<CallLog />} />
          <Route path="data/product_log" element={<ProductLog />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default Layout
