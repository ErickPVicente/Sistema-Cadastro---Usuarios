import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header style={{ padding: '20px', backgroundColor: '#282c34', color: 'white', textAlign: 'center' }}>
          <h1>Sistema de Cadastro de Usuários</h1>
        </header>
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;