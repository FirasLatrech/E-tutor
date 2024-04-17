import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import useAuthStore from 'modules/shared/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, isInitialised } = useAuthStore((state) => state);
  return isAuthenticated && isInitialised ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
