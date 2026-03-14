import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('admin@greenschool.com');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ email, role: 'principal' }));
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '25px',
        padding: '60px 40px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          textAlign: 'center', 
          marginBottom: '30px',
          fontWeight: 'bold'
        }}>
          Welcome Back
        </h1>
        
        <div style={{ marginBottom: '30px' }}>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@greenschool.com"
            style={{
              width: '100%',
              padding: '20px 25px',
              borderRadius: '15px',
              border: 'none',
              fontSize: '18px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              marginBottom: '20px'
            }}
          />
          <input 
            type="password" 
            placeholder="admin123"
            value="admin123"
            style={{
              width: '100%',
              padding: '20px 25px',
              borderRadius: '15px',
              border: 'none',
              fontSize: '18px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}
          />
        </div>
        
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '20px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '15px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(59,130,246,0.4)'
          }}
        >
          🚀 Enter Dashboard
        </button>
        
        <div style={{ 
          marginTop: '25px', 
          textAlign: 'center', 
          fontSize: '14px', 
          opacity: 0.9 
        }}>
          Demo Accounts:<br/>
          👑 admin@greenschool.com / admin123
        </div>
      </div>
    </div>
  );
};