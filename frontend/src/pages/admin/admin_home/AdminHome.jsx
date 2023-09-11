import React from 'react';
import Footer from '../../../components/footer/Footer';
import AdminNavbar from '../../../components/admin_navbar/AdminNavbar';

export default function AdminHome() {
  return (
    <div>
      <AdminNavbar />
      <div
        style={{
          margin: '20px auto', // Auto margins horizontally center the content
          marginTop: '100px',
          width: '80%', // You can adjust the width as needed
          textAlign: 'center', // Center-align the text
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
