import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CMSProvider from './context/CMSContext';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Admin from './pages/Admin';

const App: React.FC = () => (

    <CMSProvider>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/admin"
            element={
                <Admin />
            }
          />
        </Routes>
      </Router>
    </CMSProvider>

);

export default App;
