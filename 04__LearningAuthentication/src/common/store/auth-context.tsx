import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {StorageKeys} from '../constants/enums';

// Define the types for the context state
interface AuthContextType {
  token: string;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
  loading: false,
});

// Define the type for the provider's props
interface AuthContextProviderProps {
  children: ReactNode;
}

function AuthContextProvider({children}: AuthContextProviderProps) {
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const authenticate = (token: string) => {
    setToken(token);
    AsyncStorage.setItem(StorageKeys.TOKEN, token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken('');
    AsyncStorage.removeItem(StorageKeys.TOKEN);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    async function fetchToken() {
      setLoading(true);
      const storedToken = await AsyncStorage.getItem(StorageKeys.TOKEN);
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);
        setLoading(false);
      }
    }
    fetchToken();
  }, []);
  return (
    <AuthContext.Provider
      value={{token, isAuthenticated, authenticate, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
