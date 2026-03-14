import React from 'react';

export const Dashboard = () => {
  return (
    <div style={{ padding: '100px 20px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '40px', 
          textAlign: 'center',
          background: 'linear-gradient(45deg, #1e293b, #334155)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          📊 Professional Dashboard
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px', 
          marginBottom: '60px' 
        }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            backdropFilter: 'blur(20px)', 
            borderRadius: '25px', 
            padding: '40px', 
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h2 style={{ fontSize: '3rem', color: '#10b981', marginBottom: '15px' }}>1,247</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)' }}>Total Students</p>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            backdropFilter: 'blur(20px)', 
            borderRadius: '25px', 
            padding: '40px', 
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h2 style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '15px' }}>94%</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)' }}>Today Attendance</p>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', 
            backdropFilter: 'blur(20px)', 
            borderRadius: '25px', 
            padding: '40px', 
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h2 style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '15px' }}>1,180</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)' }}>Safe Home Today</p>
          </div>
        </div>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '25px', 
          padding: '40px',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>🏆 Top Performers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '25px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', color: '#facc15' }}>#1</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Priya Sharma</div>
              <div style={{ color: '#60a5fa' }}>985 points</div>
            </div>
            <div style={{ padding: '25px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px' }}>
              <div style={{ fontSize: '2.5rem', color: '#facc15' }}>#2</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Rahul Patil</div>
              <div style={{ color: '#60a5fa' }}>942 points</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};