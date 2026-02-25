import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import TopHeader from '../../components/layout/TopHeader';
import './RegistrationForm.css';

const states = ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Maharashtra'];
const cities = { 'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Trichy'], 'Karnataka': ['Bangalore', 'Mysore'] };
const departments = ['Product Management', 'Marketing Team', 'HR Department', 'Sales Division', 'Engineering', 'Finance'];

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: '', email: '', contact: '', department: '',
    state: '', city: '', address: '',
    working: 'yes',
    experience: [],
  });

  const toggle = (val) => {
    setForm(f => ({
      ...f,
      experience: f.experience.includes(val)
        ? f.experience.filter(v => v !== val)
        : [...f.experience, val],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted successfully!');
  };

  return (
    <DashboardLayout>
      <TopHeader breadcrumbs={['Dashboards', 'Default']} />
      <div className="page-content">
        <div className="page-header">
          <div>
            <h2>Registration Form</h2>
            <p>Central Hub for Personal Customization</p>
          </div>
          <button className="btn-outline">View Profile</button>
        </div>

        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-grid-2" style={{ marginBottom: 16 }}>
              <div className="form-field">
                <label>Full Name*</label>
                <input type="text" placeholder="Full Name*" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} required />
              </div>
              <div className="form-field">
                <label>Email Address*</label>
                <input type="email" placeholder="Email Address*" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>

            <div className="form-grid-2" style={{ marginBottom: 16 }}>
              <div className="form-field">
                <label>Contact Number*</label>
                <input type="tel" placeholder="Contact Number*" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} required />
              </div>
              <div className="form-field">
                <label>Department*</label>
                <div className="select-wrap">
                  <select value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} required>
                    <option value="">Department</option>
                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-grid-2" style={{ marginBottom: 16 }}>
              <div className="form-field">
                <label>State*</label>
                <div className="select-wrap">
                  <select value={form.state} onChange={e => setForm({ ...form, state: e.target.value, city: '' })} required>
                    <option value="">State*</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label>City*</label>
                <div className="select-wrap">
                  <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required>
                    <option value="">City*</option>
                    {(cities[form.state] || []).map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-field" style={{ marginBottom: 20 }}>
              <label>Address</label>
              <input type="text" placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
            </div>

            <div style={{ marginBottom: 20 }}>
              <div className="form-section-label">Currently Working or not</div>
              <div className="radio-group">
                <label className="radio-item">
                  <input type="radio" name="working" value="yes" checked={form.working === 'yes'} onChange={() => setForm({ ...form, working: 'yes' })} />
                  Yes
                </label>
                <label className="radio-item">
                  <input type="radio" name="working" value="no" checked={form.working === 'no'} onChange={() => setForm({ ...form, working: 'no' })} />
                  No
                </label>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div className="form-section-label">Years of Experience</div>
              <div className="checkbox-group" style={{ flexDirection: 'column', gap: 12 }}>
                {['1 year', '2+ year', '4+ year'].map(exp => (
                  <label key={exp} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.experience.includes(exp)}
                      onChange={() => toggle(exp)}
                    />
                    {exp}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
