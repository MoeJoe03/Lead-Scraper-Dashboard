import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Scraper from './pages/Scraper';
import Results from './pages/Results';
import Exports from './pages/Exports';
import Settings from './pages/Settings';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/scraper" element={<Scraper />} />
          <Route path="/results" element={<Results />} />
          <Route path="/exports" element={<Exports />} />
          <Route path="/team" element={<PlaceholderPage title="Team Management" />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

