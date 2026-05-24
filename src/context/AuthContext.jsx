import React, { createContext, useState, useEffect } from 'react';
import { login, register, fetchFavorites, addFavorite, removeFavorite } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
      loadFavorites(token);
    } else {
      logout();
    }
  }, [token]);

  const loadFavorites = async (currentToken) => {
    setLoadingFavorites(true);
    try {
      const ids = await fetchFavorites(currentToken);
      setFavoriteIds(ids);
    } catch (error) {
      console.error("Error cargando favoritos:", error);
    }
    setLoadingFavorites(false);
  };

  const loginUser = async (email, password) => {
    const data = await login(email, password);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  };

  const registerUser = async (name, email, password) => {
    await register(name, email, password);
    await loginUser(email, password);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setFavoriteIds([]);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const toggleFavorite = async (placeId) => {
    if (!token) {
      alert("Inicia sesión para guardar favoritos.");
      return;
    }

    const isFav = favoriteIds.includes(placeId);
    const newFavs = isFav 
      ? favoriteIds.filter(id => id !== placeId)
      : [...favoriteIds, placeId];
    
    // Optimistic UI update
    setFavoriteIds(newFavs);

    try {
      if (isFav) {
        await removeFavorite(placeId, token);
      } else {
        await addFavorite(placeId, token);
      }
    } catch (error) {
      console.error("Error al actualizar favorito", error);
      // Revertir si hay error
      setFavoriteIds(isFav ? [...favoriteIds, placeId] : favoriteIds.filter(id => id !== placeId));
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, favoriteIds, loadingFavorites, toggleFavorite, loginUser, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
