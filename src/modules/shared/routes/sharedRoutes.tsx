/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Fragment, lazy } from 'react';
import { type RouteProps } from 'react-router-dom';

type RouteConfig = {
  exact: boolean | null;
  path: string;
  component: React.ComponentType<any>;
  guard?: React.ComponentType<any> | typeof Fragment;
  layout?: React.ComponentType<any> | typeof Fragment;
} & RouteProps;

const routes: RouteConfig[] = [
  {
    exact: true,
    path: '*',
    component: lazy(async () => await import('../features/NotFound/NotFound')),
  },
];

export default routes;
