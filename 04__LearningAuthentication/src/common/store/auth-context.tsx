import React, {createContext, useState, ReactNode} from 'react';

// Define the types for the context state
interface AuthContextType {
  token: string;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

// Define the type for the provider's props
interface AuthContextProviderProps {
  children: ReactNode;
}

function AuthContextProvider({children}: AuthContextProviderProps) {
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const authenticate = (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken('');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{token, isAuthenticated, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
