/* eslint-disable @typescript-eslint/no-explicit-any */

import { type Fragment, lazy } from 'react';
import { Navigate, type RouteProps } from 'react-router-dom';
import AuthGuard from 'modules/shared/guards/AuthGuard';
import MainLayout from 'modules/shared/layout/MainLayout';
import useAuthStore from 'modules/shared/store/useAuthStore';
import { PATH } from './paths';

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
    component: lazy(async () => await import('../features/Home/index')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: MainLayout,
    path: PATH.CATEGORY,
    component: lazy(async () => await import('../features/category/index')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: MainLayout,
    path: PATH.COURSES,
    component: lazy(async () => await import('../features/courses/index')),
    layout: MainLayout,
  },
  {
    exact: true,
    // guard: MainLayout,
    path: PATH.COURSESBYID,
    component: lazy(
      async () => await import('../features/courseDetails/index')
    ),
    layout: MainLayout,
  },
];

export default routes;
