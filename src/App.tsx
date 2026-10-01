import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './ui/AppContext';
import { Shell } from './ui/Shell';
import Admin from './pages/Admin';
import Methodik from './pages/Methodik';
import Rechner from './pages/Rechner';
import Athlete from './pages/Athlete';
import Compare from './pages/Compare';
import { CompetitionDetail, CompetitionList } from './pages/Competitions';
import Countries from './pages/Countries';
import Federation from './pages/Federation';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Leaderboard from './pages/Leaderboard';
import Pricing from './pages/Pricing';
import Talent from './pages/Talent';

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/athlete/:id" element={<Athlete />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/federation/:code" element={<Federation />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/methodik" element={<Methodik />} />
            <Route path="/rechner" element={<Rechner />} />
            <Route path="/competitions" element={<CompetitionList />} />
            <Route path="/competition/:id" element={<CompetitionDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/admin" element={<Admin />} />
            {/* §55 demo mode: federation walkthrough on synthetic data */}
            <Route path="/demo/federation" element={<Navigate to="/federation/GER" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Shell>
      </HashRouter>
    </AppProvider>
  );
}
