import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SidePanel from './components/sidePanel';
import View from './pages/View';
import Settings from './pages/settings';
import Donations from './pages/donations';
import Help from './pages/help';
import ChatBot from './components/chatBot';

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row h-screen">
        <SidePanel className="w-full lg:w-1/4 xl:w-1/5 bg-gray-800 text-white" />
        <div className="flex-grow flex flex-col">
          <Header className="w-full bg-white shadow-md" />
          <div className="flex-grow p-4 overflow-auto">
            <Routes>
              <Route path="/view" element={<View />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/view" />} />
            </Routes>
          </div>
          <ChatBot className="fixed bottom-0 right-0 w-full lg:w-1/3 p-4 bg-white border-t border-gray-300" />
        </div>
      </div>
    </Router>
  );
}

export default App;
