/* eslint-disable @typescript-eslint/no-explicit-any */

import { type Fragment, lazy } from 'react';
import { Navigate, type RouteProps } from 'react-router-dom';
import { PATH } from './paths';
import PublicRoute from 'modules/shared/routes/PublicRoute';
import MainLayout from '../layout/MainLayout/MainLayout';
type RouteConfig = {
  exact: boolean | null;
  path: string;
  component: React.ComponentType<any>;
  guard?: React.ComponentType<any> | typeof Fragment | any;
  layout?: React.ComponentType<any> | typeof Fragment;
} & RouteProps;
// const { isAuthenticated, setIsAuthenticated } = useAuthStore((state) => state);
const routes: RouteConfig[] = [
  // GuestGuard Routes

  {
    exact: true,
    guard: PublicRoute,
    path: PATH.LOGIN,
    component: lazy(async () => await import('../features/Login/index')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: PublicRoute,
    path: PATH.REGISTER,
    component: lazy(async () => await import('../features/Register/index')),
    layout: MainLayout,
  },
];

export default routes;
