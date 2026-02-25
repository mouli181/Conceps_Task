import React from 'react';
import './TopHeader.css';

export default function TopHeader({ breadcrumbs = [], isStore = false }) {
  return (
    <div className="top-header">
      <div className="breadcrumb">
        {breadcrumbs.map((b, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span>/</span>}
            <span className={i === breadcrumbs.length - 1 ? 'current' : ''}>{b}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="header-actions">
        <button className="header-icon-btn">🔍</button>
        <button className="header-icon-btn">🔔</button>
        <button className="header-icon-btn">⟳</button>
        {!isStore && <button className="header-icon-btn">⊞</button>}
        <div className="avatar" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700' }}>
          JD
        </div>
      </div>
    </div>
  );
}
