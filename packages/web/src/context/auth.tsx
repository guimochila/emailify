import * as React from 'react';
import { client } from '../utils/httpClient';

type User = {
  _id: string;
  googleId: string;
  name: string;
  email: string;
  photo: string;
  credits: number;
};

type State = {
  user: User | null;
  logout(): void;
  loading: boolean;
};

const AuthContext = React.createContext<State | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchUser() {
      setLoading(true);

      try {
        const user = await client('api/current_user');
        setUser(user);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUser(null);
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const logout = React.useCallback(() => {
    client('api/logout').then(() => {
      setUser(null);
    });
  }, []);

  const value = React.useMemo(
    () => ({ user, loading, logout }),
    [user, loading, logout],
  );

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export const useUser = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  if (context.user) {
    return context.user;
  }

  throw new Error(
    `No value in user. If the user is optional, try to use useAuth instead.`,
  );
};
