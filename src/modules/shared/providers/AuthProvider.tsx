import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

import useIsMountedRef from '../../auth/hook/useIsMountedRef';

import useAuthStore from '../store/useAuthStore';
import { api } from '../lib/api';
import { clearTokens, getTokens } from '../utils/token';
import LazyLoad from '../components/LazyLoad';
import { Navigate } from 'react-router';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface JwtPayload {
  exp: number;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  const isMounted = useIsMountedRef();

  const { isAuthenticated, setUser, setIsAuthenticated } = useAuthStore();

  const isValidToken = (token: string) => {
    const decoded: JwtPayload = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }

    async function fetchUser() {
      const { refresh_token } = getTokens();

      if (refresh_token && isValidToken(refresh_token)) {
        const response = await api.get('/auth/me');
        console.log(response);
        const user = response.data;
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        clearTokens();
      }
    }

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
};

export default AuthProvider;
