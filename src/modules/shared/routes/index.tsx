/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, Suspense } from 'react';
import { Route, type RouteProps, Routes } from 'react-router-dom';
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

        const Guard = route?.guard ?? Fragment;

        const Layout = route?.layout ?? Fragment;

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
// const pageVariants = {
//   initial: {
//     opacity: 0.25,
//   },
//   in: {
//     opacity: 1,
//   },
//   out: {
//     opacity: 0.25,
//   },
// };

// const pageTransition = {
//   type: 'tween',
//   ease: 'linear',
//   duration: 0.5,
// };
export default routes;
