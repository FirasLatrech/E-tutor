import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: MainLayoutProps) => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthGuard;
