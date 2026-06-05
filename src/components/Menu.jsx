import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav style={menuStyles.navbar}>
      <div style={menuStyles.logo}>CRUD ReactQuarkus</div>
      <ul style={menuStyles.navLinks}>
        <li><Link to="/dashboard" style={menuStyles.link}>🏠 Home</Link></li>
        <li><Link to="/produtos" style={menuStyles.link}>📦 Produtos</Link></li>
        <li><Link to="/categorias" style={menuStyles.link}>📂 Categorias</Link></li>
        {/* Dica: Para o Logout, depois faremos uma action para limpar o estado */}
        <li><Link to="/login" style={menuStyles.logout}>Sair</Link></li>
      </ul>
    </nav>
  );
}

const menuStyles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a1a1a', padding: '15px 30px', color: '#fff', fontFamily: 'sans-serif' },
  logo: { fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0 },
  link: { color: '#bbb', textDecoration: 'none', fontSize: '16px', fontWeight: '500' },
  logout: { color: '#ff4d4d', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }
};