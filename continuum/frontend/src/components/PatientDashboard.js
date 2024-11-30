import React, { useState, useEffect } from 'react';
import '../styles/DashboardStyles.css';
import axios from 'axios';

export function PatientDashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/dashboard/patient')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">Patient Dashboard</header>
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
          <h2>My Clinic</h2>
          <p>Your clinic is \"{data.clinic || 'Loading...'}\"</p>
        </section>
        <section className="dashboard-section">
          <h2>Coordinator Details</h2>
          <p>Your coordinator is {data.coordinator || 'Loading...'}</p>
        </section>
      </main>
    </div>
  );
}

export default PatientDashboard;
