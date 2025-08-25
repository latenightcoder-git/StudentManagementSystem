import React from "react";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Logo"
            className="logo"
          />
          <h2 className="title">Student Management System</h2>
        </div>
      </nav>

      {/* Page content */}
      <div className="container">
        <StudentTable />
      </div>
    </div>
  );
}

export default App;
