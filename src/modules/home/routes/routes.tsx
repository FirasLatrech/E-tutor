/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate, RouteProps } from 'react-router-dom';
import { Fragment, lazy } from 'react';
import { PATH } from './paths';
import MainLayout from 'modules/shared/layout/MainLayout';
import useAuthStore from 'modules/shared/store/useAuthStore';
import AuthGuard from 'modules/shared/guards/AuthGuard';

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
    // guard: MainLayout,
    path: PATH.ROOT,
    component: lazy(() => import('../features/Home/index')),
    layout: MainLayout,
  },
  // {
  //   exact: true,
  //   // guard: MainLayout,
  //   path: PATH.REGISTER,
  //   component: lazy(() => import('../views/Register/index')),
  //   // layout: MainLayout,
  // },
];

export default routes;
