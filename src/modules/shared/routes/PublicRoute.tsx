import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import useAuthStore from 'modules/shared/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, isInitialised } = useAuthStore((state) => state);

  return isAuthenticated && isInitialised ? <Navigate to="/" /> : children;
};

export default PublicRoute;
