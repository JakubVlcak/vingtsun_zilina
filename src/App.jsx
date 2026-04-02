import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Clanky from './views/Clanky';
import ClanokDetail from './views/ClanokDetail';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clanky" element={<Clanky />} />
        <Route path="/clanky/:slug" element={<ClanokDetail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
