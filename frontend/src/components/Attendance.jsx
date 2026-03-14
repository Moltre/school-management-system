import React, { useState, useRef } from 'react';
import { Camera, CheckCircle, XCircle } from 'lucide-react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export const Attendance = () => {
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(false);
  const qrRef = useRef(null);

  const onScanSuccess = (decodedText) => {
    setScanResult({
      id: decodedText,
      student: 'Rahul Patil - 10A',
      status: '✅ Present',
      time: new Date().toLocaleTimeString()
    });
    setScanning(false);
  };

  const startScanner = () => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    scanner.render(onScanSuccess, (error) => console.log('Scan error:', error));
    setScanning(true);
  };

  return (
    <div style={{ padding: '120px 20px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px' }}>
        📱 QR Attendance Scanner
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 400px', 
        gap: '40px', 
        alignItems: 'start' 
      }}>
        {/* QR Scanner */}
        <div>
          <div id="qr-reader" style={{ width: '100%', maxWidth: '500px' }}></div>
          {!scanning ? (
            <button 
              onClick={startScanner}
              style={{
                display: 'block',
                margin: '30px auto 0',
                padding: '20px 40px',
                background: 'linear-gradient(45deg, #10b981, #059669)',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(16,185,129,0.4)'
              }}
            >
              <Camera style={{ display: 'inline', marginRight: 10, verticalAlign: 'middle' }} />
              Start QR Scanner
            </button>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>Scanning...</div>
              <button 
                onClick={() => setScanning(false)}
                style={{
                  padding: '12px 24px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer'
                }}
              >
                Stop Scanner
              </button>
            </div>
          )}
        </div>

        {/* Result Panel */}
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '25px', 
          padding: '40px',
          border: '1px solid rgba(255,255,255,0.2)',
          minHeight: '400px'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>
            Latest Scan
          </h2>
          
          {scanResult ? (
            <div style={{ textAlign: 'center' }}>
              <CheckCircle style={{ width: 80, height: 80, color: '#10b981', margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{scanResult.student}</h3>
              <div style={{ fontSize: '1.5rem', color: '#10b981' }}>{scanResult.status}</div>
              <div style={{ marginTop: '20px', fontSize: '1.2rem', opacity: 0.9 }}>
                {scanResult.time}
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginTop: '80px' }}>
              <XCircle style={{ width: 60, height: 60, margin: '0 auto 20px', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No scans yet</h3>
              <p>Scan a student QR code to mark attendance</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};