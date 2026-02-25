import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import './Verify.css';

export default function Verify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['3', '0', '', '', '', '']);
  const [timer, setTimer] = useState(37);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  };

  const handleContinue = () => navigate('/dashboard');

  return (
    <div className="auth-bg">
      <div className="auth-card otp-card">
        <div className="otp-phone-icon" />

        <h2>Verify your phone</h2>
        <p>Enter the verification code we sent to</p>
        <p className="phone-masked">******7859</p>

        <div className="otp-inputs">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => (inputRefs.current[i] = el)}
              type="text"
              maxLength={1}
              value={digit}
              className={i === otp.findIndex(d => d === '') ? 'active' : ''}
              onChange={e => handleChange(i, e.target.value)}
              onKeyDown={e => handleKeyDown(i, e)}
            />
          ))}
        </div>

        <div className="resend-row">
          Didn't receive a code? ({timer}s)
          {timer === 0 && <a href="#" onClick={e => { e.preventDefault(); setTimer(60); }}>Resend</a>}
          {timer > 0 && <a href="#" style={{ color: '#aaa', cursor: 'default' }}> Resend</a>}
        </div>

        <button className="btn-primary" onClick={handleContinue} style={{ maxWidth: '400px', width: '100%' }}>
          Continue
        </button>
      </div>
    </div>
  );
}
