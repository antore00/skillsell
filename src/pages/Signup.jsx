// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr('');
    try {
      await signup(email, password);
      navigate('/');
    } catch (error) {
      setErr(error.message);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Registrati</h2>
      {err && <div style={{ color: 'red' }}>{err}</div>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 320 }}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}
