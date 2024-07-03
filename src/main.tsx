import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Locais from './assets/screens/Locais';
import Planos from './assets/screens/Planos';
import Produtoras from './assets/screens/Produtoras';
import Usuarios from './assets/screens/Usuarios';
import Maquininhas from './assets/screens/Maquininhas';
import Ajuda from './assets/screens/Ajuda';
import DadosUsuario from './assets/screens/DadosUsuario';
import DadosProdutora from './assets/screens/DadosProdutora';
import DadosPlano from './assets/screens/DadosPlano';
import DadosMaquinha from './assets/screens/DadosMaquininha';
import DadosLocal from './assets/screens/DadosLocal';
import Clientes from './assets/screens/Clientes';
import DadosCliente from './assets/screens/DadosCliente';
import Home from './assets/screens/Home'; // Corrigido aqui
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/estabelecimentos" element={<Locais />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtoras" element={<Produtoras />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/maquininhas" element={<Maquininhas />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/" element={<App />} />
        <Route path="/produtoras/dado" element={<DadosProdutora />} />
        <Route path="/maquininhas/dado" element={<DadosMaquinha />} />
        <Route path="/planos/dado" element={<DadosPlano />} />
        <Route path="/estabelecimento/dado" element={<DadosLocal />} />
        <Route path="/usuarios/dado" element={<DadosUsuario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/dado" element={<DadosCliente />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
