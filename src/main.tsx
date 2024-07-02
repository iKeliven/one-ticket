import { createRoot } from 'react-dom/client'; // Importe createRoot corretamente

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/screens/Home.tsx';
import './index.css';
import Locais from './assets/screens/Locais.tsx';
import Planos from './assets/screens/Planos.tsx';
import Produtoras from './assets/screens/Produtoras.tsx';
import Usuarios from './assets/screens/Usuarios.tsx';
import Maquininhas from './assets/screens/Maquininhas.tsx';
import Ajuda from './assets/screens/Ajuda.tsx';
import DadosUsuario from './assets/screens/DadosUsuario.tsx';
import DadosProdutora from './assets/screens/DadosProdutora.tsx';
import DadosPlano from './assets/screens/DadosPlano.tsx';
import DadosMaquinha from './assets/screens/DadosMaquininha.tsx';
import DadosLocal from './assets/screens/DadosLocal.tsx';
import Clientes from './assets/screens/Clientes.tsx';
import DadosCliente from './assets/screens/DadosCliente.tsx';
import Login from './assets/screens/Login.tsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/estabelecimentos" element={<Locais />} />
        <Route path="/planos" element={<Planos />} /> d
        <Route path="/produtoras" element={<Produtoras />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/maquininhas" element={<Maquininhas />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/" element={<Login />} />
        {/* Commented out routes */}
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
