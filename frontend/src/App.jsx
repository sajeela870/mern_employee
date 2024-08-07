import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employee/:id?" element={<EmployeeForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
