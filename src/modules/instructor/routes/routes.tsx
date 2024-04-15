/* eslint-disable @typescript-eslint/no-explicit-any */

import { type Fragment, lazy } from 'react';
import { Navigate, type RouteProps } from 'react-router-dom';
import { PATH } from './paths';
import PublicRoute from 'modules/shared/routes/PublicRoute';
import MainLayout from '../layout/MainLayout/MainLayout';
import PrivateRoute from 'modules/shared/routes/PrivateRoute';
type RouteConfig = {
  exact: boolean | null;
  path: string;
  component: React.ComponentType<any>;
  guard?: React.ComponentType<any> | typeof Fragment | any;
  layout?: React.ComponentType<any> | typeof Fragment;
} & RouteProps;
const routes: RouteConfig[] = [
  {
    exact: true,
    guard: PrivateRoute,
    path: PATH.DASHBOARD,
    component: lazy(async () => await import('../pages/Dashboard')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: PrivateRoute,
    path: PATH.COURSES,
    component: lazy(async () => await import('../pages/courses')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: PrivateRoute,
    path: PATH.NEW_COURSES,
    component: lazy(async () => await import('../pages/NewCourse')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: PrivateRoute,
    path: PATH.SETTINGS,
    component: lazy(async () => await import('../pages/settings')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: PrivateRoute,
    path: PATH.EARNING,
    component: lazy(async () => await import('../pages/Earning')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: PrivateRoute,
    path: PATH.MESSAGE,
    component: lazy(async () => await import('../pages/conversations')),
    layout: MainLayout,
  },
];

export default routes;
