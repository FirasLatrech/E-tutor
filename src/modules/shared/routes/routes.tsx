import sharedRoutes from './sharedRoutes';

import authRoutes from '../../auth/routes/routes';
import HomeRoutes from '../../home/routes/routes';

const routes = [...sharedRoutes, ...authRoutes, ...HomeRoutes];

export default routes;
