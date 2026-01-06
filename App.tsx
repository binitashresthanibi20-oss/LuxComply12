import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, FeaturesPage, ProductPage, PricingPage, AboutPage, ResourcesPage, ContactPage } from './pages/PublicPages';
import { UserDashboard, AdminDashboard, AdminAutomations, InspectorDashboard, ComplianceStandardsPage, RegulatoryInspectionView } from './pages/DashboardPages';
import { LoginPage } from './pages/AuthPages';
import { authService } from './services/auth';

// Protected Route Wrapper
const RequireAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const isAuth = authService.isAuthenticated();
    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Strict Regulatory Inspection Route (No standard layout) */}
        <Route path="/inspection/entity/:id" element={<RequireAuth><RegulatoryInspectionView /></RequireAuth>} />

        {/* Protected User Dashboard Routes */}
        <Route path="/dashboard" element={<RequireAuth><UserDashboard /></RequireAuth>} />
        <Route path="/dashboard/documents" element={<RequireAuth><UserDashboard /></RequireAuth>} />
        <Route path="/dashboard/tasks" element={<RequireAuth><UserDashboard /></RequireAuth>} />
        <Route path="/dashboard/risk" element={<RequireAuth><UserDashboard /></RequireAuth>} />
        
        {/* Protected Admin Dashboard Routes */}
        <Route path="/admin" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
        <Route path="/admin/standards" element={<RequireAuth><ComplianceStandardsPage /></RequireAuth>} />
        <Route path="/admin/history" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
        <Route path="/admin/automations" element={<RequireAuth><AdminAutomations /></RequireAuth>} />
        <Route path="/admin/settings" element={<RequireAuth><AdminDashboard /></RequireAuth>} />
        <Route path="/admin/inspection" element={<RequireAuth><InspectorDashboard /></RequireAuth>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;