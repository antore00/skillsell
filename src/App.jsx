// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function Home() {
  const { currentUser, logout } = useAuth();
  return (
    <div style={{ padding: 24 }}>
      <h1>Benvenuto in SkillSell</h1>
      {currentUser ? (
        <>
          <p>Connesso come: {currentUser.email}</p>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <>
          <p>Sei offline. Accedi o registrati per vendere o acquistare.</p>
          <Link to="/login">Accedi</Link> · <Link to="/signup">Registrati</Link>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* esempio di route protetta */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <div style={{ padding: 24 }}>
                <h2>Dashboard venditore</h2>
                <p>Qui metteremo la creazione offerte e i guadagni.</p>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
