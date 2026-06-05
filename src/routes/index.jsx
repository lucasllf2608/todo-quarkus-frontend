import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Importe suas páginas (ajustes feitos nos caminhos abaixo)
import Login from '../pages/Login';
import Menu from '../components/Menu'; 
import Produto from '../pages/Produto'; // Aponta para o index.jsx que criamos na pasta Produto
import Categoria from '../pages/Categoria/Categoria'; // Ajustado para apontar para o arquivo Categoria.jsx

// Componente para proteger rotas privadas
function PrivateRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  
  // Se não estiver logado, redireciona para o login
  return token ? children : <Navigate to="/login" />;
}

// Componente para evitar que usuário logado volte ao Login
function PublicRoute({ children }) {
  const { token } = useSelector((state) => state.auth);
  
  // Se já estiver logado, manda direto para o painel principal
  return !token ? children : <Navigate to="/dashboard" />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />

      {/* Rotas Privadas (Protegidas) */}
      <Route 
        path="/dashboard" 
        element={
          <PrivateRoute>
            <LayoutComMenu><DashboardHome /></LayoutComMenu>
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/produtos" 
        element={
          <PrivateRoute>
            <LayoutComMenu><Produto /></LayoutComMenu>
          </PrivateRoute>
        } 
      />

      <Route 
        path="/categorias" 
        element={
          <PrivateRoute>
            <LayoutComMenu><Categoria /></LayoutComMenu>
          </PrivateRoute>
        } 
      />

      {/* CORRIGIDO: Alterado de <path> para <Route> */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

// Um mini-layout para o Menu aparecer fixo no topo das páginas internas
function LayoutComMenu({ children }) {
  return (
    <div>
      <Menu />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

// Um componente simples só para a home do Dashboard por enquanto
function DashboardHome() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h2>Bem-vindo de volta, {user?.name || 'Desenvolvedor'}!</h2>
      <p>Selecione uma opção no menu acima para começar a cadastrar.</p>
    </div>
  );
}