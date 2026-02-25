import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const menuItems = {
  user: [
    { label: 'List', icon: '☰', path: '/dashboard/list' },
    { label: 'Registration Form', icon: '📋', path: '/dashboard/registration' },
    { label: 'Public Profile', icon: '👤', path: '/dashboard/profile', hasPlus: true },
    { label: 'My Account', icon: '⚙️', path: '/dashboard/account', hasPlus: true },
    { label: 'Community', icon: '🌐', path: '/dashboard/community', hasPlus: true },
    { label: 'User Management', icon: '👥', path: '/dashboard/users', hasPlus: true },
    { label: 'Authentication', icon: '🔐', path: '/dashboard/auth', hasPlus: true },
  ],
  apps: [
    { label: 'Store Client', icon: '🛍️', path: '/dashboard/store', hasPlus: true, sub: [
      { label: 'Home', path: '/dashboard/store/home' },
      { label: 'Search Results - Grid', path: '/dashboard/store' },
      { label: 'Search Results - List', path: '/dashboard/store/list' },
      { label: 'Product Details', path: '/dashboard/store' },
      { label: 'Wishlist', path: '/dashboard/store/wishlist' },
      { label: 'Shopping Cart', path: '/dashboard/store/cart' },
      { label: 'Checkout', path: '/dashboard/store/checkout' },
      { label: 'Order Placed', path: '/dashboard/store/placed' },
      { label: 'Order Receipt', path: '/dashboard/store/receipt' },
      { label: 'My Orders', path: '/dashboard/store/orders' },
    ]},
    { label: 'Store Admin', icon: '🏪', badge: 'Soon' },
    { label: 'Store - Services', icon: '⚡', badge: 'Soon' },
    { label: 'AI Promt', icon: '🤖', badge: 'Soon' },
    { label: 'Invoice Generator', icon: '📄', badge: 'Soon' },
    { label: 'Email Client', icon: '✉️', badge: 'Soon' },
    { label: 'Social Network', icon: '💬', badge: 'Soon' },
  ],
};

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState({ 'Store Client': true });

  const isActive = (path) => path && location.pathname === path;
  const isSubActive = (items) => items?.some(s => s.path && location.pathname === s.path);

  const toggle = (label) => setExpanded(p => ({ ...p, [label]: !p[label] }));

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>CONCEPS</span>
        <button className="sidebar-toggle-btn">◀</button>
      </div>

      <div className="sidebar-section">
        <div
          className={`sidebar-item ${isActive('/dashboard') ? 'active' : ''}`}
          onClick={() => navigate('/dashboard')}
        >
          <span className="icon">⊞</span>
          Dashboards
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-label">USER</div>
        {menuItems.user.map(item => (
          <div
            key={item.label}
            className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => item.path && navigate(item.path)}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
            {item.hasPlus && <span className="plus">+</span>}
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-label">APPS</div>
        {menuItems.apps.map(item => (
          <React.Fragment key={item.label}>
            <div
              className={`sidebar-item ${isActive(item.path) || isSubActive(item.sub) ? 'active' : ''}`}
              onClick={() => {
                if (item.sub) toggle(item.label);
                else if (item.path) navigate(item.path);
              }}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
              {item.badge && <span className="badge">{item.badge}</span>}
              {item.hasPlus && !item.badge && <span className="plus">+</span>}
            </div>
            {item.sub && expanded[item.label] && (
              <div className="sidebar-sub">
                {item.sub.map(s => (
                  <div
                    key={s.label}
                    className={`sidebar-item ${location.pathname === s.path && location.pathname !== '/dashboard/store' ? '' : s.label === 'Search Results - Grid' && location.pathname === '/dashboard/store' ? 'active' : ''}`}
                    onClick={() => s.path && navigate(s.path)}
                  >
                    {s.label}
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
}
