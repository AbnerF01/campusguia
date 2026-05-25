import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserPlus } from 'lucide-react';
import styles from './Auth.module.css';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.authContainer} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Crear Cuenta</h2>
      {!isOnline && <p style={{ color: '#d9534f', fontWeight: 'bold' }}>⚠️ No tienes conexión a internet. Conéctate para registrarte.</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' }}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
        />
        <button 
          type="submit" 
          disabled={!isOnline}
          style={{ 
            padding: '10px', 
            borderRadius: '8px', 
            border: 'none', 
            backgroundColor: isOnline ? '#003b5c' : '#ccc', 
            color: 'white', 
            fontWeight: 'bold', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px',
            cursor: isOnline ? 'pointer' : 'not-allowed'
          }}>
          <UserPlus size={20} /> Registrarse
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        ¿Ya tienes cuenta? <Link to="/login" style={{ color: '#003b5c', fontWeight: 'bold' }}>Inicia Sesión</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
