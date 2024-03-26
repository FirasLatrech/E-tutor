// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { useAuthRoutes } from 'modules/auth/routes';
// import { useHomeRoutes } from 'modules/home/routes';
// import NotFound from '../pages/NotFound';

// const authRoutes = useAuthRoutes();
// const homeRoutes = useHomeRoutes();

// const Router = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />

//       {authRoutes}

//       {homeRoutes}

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </BrowserRouter>
// );

// export default Router;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, Suspense } from 'react';
import { Navigate, Route, type RouteProps, Routes } from 'react-router-dom';
import LazyLoad from '../components/LazyLoad/LazyLoad';
import pages from './routes';

type RouteConfig = {
  exact: boolean | null;
  path: string;
  component: React.ComponentType<any>;
  guard?: React.ComponentType<any> | typeof Fragment;
  layout?: React.ComponentType<any> | typeof Fragment;
} & RouteProps;

export const renderRoutes = (routes: RouteConfig[] = []) => (
  <Suspense fallback={<LazyLoad />}>
    <Routes>
      {routes.map((route, index) => {
        const Component = route.component;

        const Guard = route?.guard || Fragment;

        const Layout = route?.layout || Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Guard>
                <Layout>
                  <Component />
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: RouteConfig[] = [...pages];

export default routes;
