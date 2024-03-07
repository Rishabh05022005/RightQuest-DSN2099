import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChildLogin from './components/ChildLogin';
import OrganizationLogin from './components/OrganizationLogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Welcome to the Child Rights Portal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/child-login">Login as a Child</Link>
              </li>
              <li>
                <Link to="/organization-login">Login as an Organization</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/child-login" element={<ChildLogin />} />
          <Route path="/organization-login" element={<OrganizationLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
