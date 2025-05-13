import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Appointments from './pages/Appointments';
import Patients from './pages/Patients';
import Setting from './pages/Setting';
import Chats from './pages/Chats';


const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-50 p-6 overflow-auto">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
      </div>
    </div>
  )
}

export default App