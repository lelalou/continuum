import React, { useState, useEffect } from 'react';
import '../../styles/DashboardStyles.css';
import axios from 'axios';

export function PhysicianDashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/dashboard/physician')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">Physician Dashboard</header>
      <nav className="dashboard-sidebar">
        <ul>
          <li><a href="/overview">Overview</a></li>
          <li><a href="/general">General</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Patient Updates</h2>
          <p>See the latest patient information updates here.</p>
        </section>
        <section className="dashboard-section">
          <h2>Clinic Navigation</h2>
          <p>Navigate between clinics you oversee.</p>
        </section>
      </main>
    </div>
  );
}

export default PhysicianDashboard;
