import { Route } from 'react-router-dom';
import PrivateRoute from 'modules/shared/routes/PrivateRoute';
import Home from '../features/Home';
import MainLayout from 'modules/shared/layout/MainLayout';

export const useHomeRoutes = () => {
  return (
    <>
      <Route
        path="/home"
        element={
          // <PrivateRoute>
          <MainLayout>
            <Home />
          </MainLayout>
          // </PrivateRoute>
        }
      />
    </>
  );
};
