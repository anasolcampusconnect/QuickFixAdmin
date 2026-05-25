import React, { useState } from "react";

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import ServiceProviders from "./Pages/ServiceProviders.jsx";
import Customers from "./Pages/Customers.jsx";
import Bookings from "./Pages/Bookings.jsx";
import Categories from "./Pages/Categories.jsx";
import Payments from "./Pages/Payments.jsx";
import Reviews from "./Pages/Reviews.jsx";
import Settings from "./Pages/Settings.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <AdminLayout setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route
            path="service-providers"
            element={<ServiceProviders />}
          />

          <Route path="customers" element={<Customers />} />

          <Route path="bookings" element={<Bookings />} />

          <Route path="categories" element={<Categories />} />

          <Route path="payments" element={<Payments />} />

          <Route path="reviews" element={<Reviews />} />

          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;