import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Importe a action que criamos no arquivo de actions
import { loginRequest } from '../../store/modules/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  
  // Pegando as propriedades do estado global do Redux
  const { loading, error, token } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginRequest(email, password));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2>CRUD ReactQuarkus - Login</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: admin@email.com"
              required
              disabled={loading}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
              disabled={loading}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.errorText}>{error}</p>}

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Autenticando...' : 'Entrar'}
          </button>
        </form>
        
        {token && <p style={styles.successText}>Logado com sucesso!</p>}
      </div>
    </div>
  );
}

// Estilos inline simples para você visualizar tudo organizado na tela
const styles = {
  container: { display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' },
  loginBox: { padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', marginTop: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', textAlign: 'left', marginBottom: '15px' },
  input: { padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' },
  button: { padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' },
  errorText: { color: 'red', fontSize: '14px', margin: '10px 0' },
  successText: { color: 'green', fontSize: '14px', marginTop: '15px', fontWeight: 'bold' }
};