import React, { useState, useEffect } from 'react';
import '../../styles/DashboardStyles.css';
import axios from 'axios';

export function ClinicDashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/dashboard/clinic')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">Clinic Dashboard</header>
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
          <h2>Messages</h2>
          <p>{data.messages || 0} recent communications.</p>
        </section>
        <section className="dashboard-section">
          <h2>OMS</h2>
          <p>{data.omsUpdates || 0} operational management system updates available.</p>
        </section>
      </main>
    </div>
  );
}

export default ClinicDashboard;
