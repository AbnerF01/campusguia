// Usando la IP local para que pueda ser accedido desde el emulador o celular
const API_URL = 'http://192.168.1.11:5000/api';

export const fetchPlaces = async () => {
  const response = await fetch(`${API_URL}/places`);
  if (!response.ok) throw new Error('Error fetching places');
  return response.json();
};

export const register = async (name, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error al registrarse');
  }
  return response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Credenciales inválidas');
  }
  return response.json();
};

export const fetchFavorites = async (token) => {
  const response = await fetch(`${API_URL}/favorites`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Error fetching favorites');
  return response.json();
};

export const addFavorite = async (buildingId, token) => {
  const response = await fetch(`${API_URL}/favorites`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify({ buildingId }),
  });
  if (!response.ok) throw new Error('Error adding favorite');
  return response.json();
};

export const removeFavorite = async (buildingId, token) => {
  const response = await fetch(`${API_URL}/favorites/${buildingId}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!response.ok) throw new Error('Error removing favorite');
  return response.json();
};
