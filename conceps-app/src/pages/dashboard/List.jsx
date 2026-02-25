import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import TopHeader from '../../components/layout/TopHeader';
import { listData } from '../../data/mockData';
import './List.css';

export default function List() {
  const [search, setSearch] = useState('');

  const filtered = listData.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <TopHeader breadcrumbs={['Dashboards', 'Default']} />
      <div className="page-content">
        <div className="page-header">
          <div>
            <h2>List</h2>
            <p>Central Hub for Personal Customization</p>
          </div>
          <button className="btn-outline">View Profile</button>
        </div>

        <div className="list-card">
          <div className="list-card-header">
            <h3>List</h3>
            <div className="search-input-wrap">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search Teams"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Number</th>
                <th>Location</th>
                <th>Address</th>
                <th>Currently working</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(user => (
                <tr key={user.id}>
                  <td className="no-cell">{user.no}</td>
                  <td>
                    <div className="user-cell">
                      <span className="uname">{user.name}</span>
                      <span className="uemail">{user.email}</span>
                    </div>
                  </td>
                  <td>
                    <div className="dept-cell">
                      <div className="dept-name">{user.department}</div>
                      <div className="dept-sub">{user.deptDesc}</div>
                    </div>
                  </td>
                  <td style={{ fontSize: 13 }}>{user.number}</td>
                  <td style={{ fontSize: 13 }}>{user.location}</td>
                  <td style={{ fontSize: 13 }}>{user.address}</td>
                  <td>
                    <span className={user.working ? 'badge-yes' : 'badge-no'}>
                      {user.working ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td style={{ fontSize: 13 }}>{user.experience}</td>
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
              {[1, 2, 3, 4, 5].map(p => (
                <button key={p} className={`page-btn ${p === 2 ? 'active' : ''}`}>{p}</button>
              ))}
              <button className="page-btn">›</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
