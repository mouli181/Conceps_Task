import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardLayout from '../../components/layout/DashboardLayout';
import TopHeader from '../../components/layout/TopHeader';
import { earningsData, teamsData } from '../../data/mockData';
import './Dashboard.css';

function StarRating({ rating, max = 5 }) {
  return (
    <span className="star-rating">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? '' : 'empty'}>★</span>
      ))}
    </span>
  );
}

function MemberAvatars({ colors }) {
  const initials = ['JD', 'KM', 'SR'];
  return (
    <div className="member-avatars">
      {colors.map((c, i) => (
        <div key={i} className="av" style={{ background: c }}>{initials[i]}</div>
      ))}
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: '8px 14px', fontSize: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ fontWeight: 700, color: '#1B6EF3' }}>${payload[0].value.toLocaleString()}</div>
        <div style={{ color: '#6b7280' }}>{label}</div>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const [referralsOnly, setReferralsOnly] = useState(false);

  return (
    <DashboardLayout>
      <TopHeader breadcrumbs={['Dashboards', 'Default']} />
      <div className="page-content">
        <div className="page-header">
          <div>
            <h2>Dashboard</h2>
            <p>Central Hub for Personal Customization</p>
          </div>
          <button className="btn-outline">View Profile</button>
        </div>

        {/* Stats + Connect card */}
        <div className="dashboard-row" style={{ marginBottom: 16 }}>
          <div className="stats-grid">
            <div className="stat-card linkedin">
              <div className="stat-platform">in</div>
              <div className="stat-value">9.3k</div>
              <div className="stat-label">Amazing mates</div>
            </div>
            <div className="stat-card youtube">
              <div className="stat-platform">▶</div>
              <div className="stat-value">24k</div>
              <div className="stat-label">Lessons Views</div>
            </div>
            <div className="stat-card instagram">
              <div className="stat-platform">📷</div>
              <div className="stat-value">608</div>
              <div className="stat-label">New subscribers</div>
            </div>
            <div className="stat-card tiktok">
              <div className="stat-platform">♪</div>
              <div className="stat-value">2.5k</div>
              <div className="stat-label">Stream audience</div>
            </div>
          </div>

          <div className="connect-card">
            <div className="connect-content">
              <div className="connect-avatars">
                {['#667eea', '#f59e0b', '#22c55e', '#ef4444'].map((c, i) => (
                  <div key={i} className="av" style={{ background: c, width: 32, height: 32, borderRadius: '50%', border: '2px solid white', marginRight: -8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'white' }}>
                    {['JD', 'KM', 'SR', 'S'][i]}
                  </div>
                ))}
              </div>
              <h3>Connect Today & Join<br />the <span>KeenThemes Network</span></h3>
              <p>Enhance your projects with premium themes and templates. Join the KeenThemes community today for top-quality designs and resources.</p>
              <a href="#" className="connect-link">Get Started</a>
            </div>
            <div className="connect-preview" style={{ background: '#f0f4ff', borderRadius: 8, padding: 10, border: '1px solid #e8f0fd', minWidth: 110, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: 9, color: '#aaa', textAlign: 'center' }}>
                <div style={{ background: '#e5e7eb', borderRadius: 4, padding: '4px 8px', marginBottom: 4, fontSize: 8 }}>Sign in</div>
                <div style={{ background: '#e5e7eb', borderRadius: 4, padding: '2px 8px', marginBottom: 4, fontSize: 8 }}>email@email.com</div>
                <div style={{ background: '#1B6EF3', borderRadius: 4, padding: '2px 8px', color: 'white', fontSize: 8 }}>Sign In</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights + Earnings */}
        <div className="dashboard-row">
          <div className="highlights-card">
            <div className="card-header-row">
              <h3>Highlights</h3>
              <button className="card-menu-btn">···</button>
            </div>
            <div>
              <span className="highlights-total">$295.7k</span>
              <span className="highlights-change">↑2.7%</span>
            </div>
            <div className="progress-bars" style={{ marginTop: 10 }}>
              <div className="seg" style={{ width: '45%', background: '#1B6EF3' }} />
              <div className="seg" style={{ width: '30%', background: '#f59e0b' }} />
              <div className="seg" style={{ width: '25%', background: '#8b5cf6' }} />
            </div>
            <div className="legend">
              <div className="legend-item"><div className="legend-dot" style={{ background: '#1B6EF3' }} />Metronic</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: '#f59e0b' }} />Bundle</div>
              <div className="legend-item"><div className="legend-dot" style={{ background: '#8b5cf6' }} />MetronicNest</div>
            </div>
            <table className="highlights-table">
              <tbody>
                <tr>
                  <td><div className="source-cell">🏪 Online Store</div></td>
                  <td className="amount">$172k</td>
                  <td className="change-up">↑3.9%</td>
                </tr>
                <tr>
                  <td><div className="source-cell">👍 Facebook</div></td>
                  <td className="amount">$85k</td>
                  <td className="change-down">↓0.7%</td>
                </tr>
                <tr>
                  <td><div className="source-cell">📷 Instagram</div></td>
                  <td className="amount">$36k</td>
                  <td className="change-up">↑8.2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="earnings-card" style={{ marginBottom: 0 }}>
            <div className="earnings-header">
              <h3>Earnings</h3>
              <div className="earnings-controls">
                <div className="toggle-switch">
                  Referrals only
                  <div className={`toggle ${referralsOnly ? 'on' : ''}`} onClick={() => setReferralsOnly(!referralsOnly)} />
                </div>
                <select className="period-select">
                  <option>12 months</option>
                  <option>6 months</option>
                  <option>3 months</option>
                </select>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={earningsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="value" stroke="#1B6EF3" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: '#1B6EF3' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom row: Meeting + Teams */}
        <div className="dashboard-row" style={{ marginTop: 16 }}>
          <div className="meeting-card">
            <div className="meeting-header-row">
              <h3>Team Meeting</h3>
              <div style={{ width: 32, height: 32, background: '#e8f0fd', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🎥</div>
            </div>
            <div className="meeting-time">09:00 - 09:30</div>
            <p className="meeting-desc">
              Team meeting to discuss strategies, outline project milestones, define key goals, and establish clear timelines.
            </p>
            <div className="meeting-meta">
              <div className="meeting-meta-item">
                <label>📍 Location</label>
                <span>Amsterdam</span>
              </div>
              <div className="meeting-meta-item">
                <label>👥 Team</label>
                <div style={{ display: 'flex' }}>
                  {['#667eea', '#f59e0b'].map((c, i) => (
                    <div key={i} style={{ width: 24, height: 24, borderRadius: '50%', background: c, border: '2px solid white', marginRight: -6, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
                      {['JD', 'K'][i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button className="btn-join">Join Meeting</button>
          </div>

          <div className="teams-card">
            <div className="teams-header">
              <h3>Teams</h3>
              <div className="search-input-wrap">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search Teams" />
              </div>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Team <span className="sort-icon">↕</span></th>
                  <th>Rating <span className="sort-icon">↕</span></th>
                  <th>Last Modified <span className="sort-icon">↕</span></th>
                  <th>Members <span className="sort-icon">↕</span></th>
                </tr>
              </thead>
              <tbody>
                {teamsData.map(team => (
                  <tr key={team.id}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <div className="team-name">{team.name}</div>
                      <div className="team-desc">{team.desc}</div>
                    </td>
                    <td><StarRating rating={team.rating} /></td>
                    <td style={{ fontSize: 12, color: '#6b7280' }}>{team.lastModified}</td>
                    <td><MemberAvatars colors={team.members} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bottom-row">
              <div className="per-page-row">
                Show <select><option>5</option><option>10</option></select> per page
              </div>
              <div className="pagination-controls">
                <span style={{ fontSize: 12, color: '#6b7280', marginRight: 8 }}>1–10 of 52</span>
                <button className="page-btn">‹</button>
                <button className="page-btn">1</button>
                <button className="page-btn active">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">5</button>
                <button className="page-btn">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
