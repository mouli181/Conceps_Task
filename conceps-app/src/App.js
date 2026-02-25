import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.css';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Verify from './pages/auth/Verify';
import Dashboard from './pages/dashboard/Dashboard';
import RegistrationForm from './pages/dashboard/RegistrationForm';
import List from './pages/dashboard/List';
import StoreGrid from './pages/store/StoreGrid';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/registration" element={<RegistrationForm />} />
        <Route path="/dashboard/list" element={<List />} />
        <Route path="/dashboard/store" element={<StoreGrid />} />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
