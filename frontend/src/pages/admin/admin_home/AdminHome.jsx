import React from 'react';
import Footer from '../../../components/footer/Footer';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';

export default function AdminHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AdminNavbar />
      <div
        style={{
          flex: '1', // This makes the content area expand to fill the available space
          margin: '20px auto',
          marginTop: '100px',
          width: '80%',
          textAlign: 'center',
        }}
        className="admin-content"
      >
        <h1>Welcome to the Admin Dashboard</h1>
        <p>
          This is the homepage for admin users. You can manage and control
          various aspects of the application from here.
        </p>
        {/* Add more admin-specific content or functionality here */}
      </div>
      <Footer />
    </div>
  );
}
