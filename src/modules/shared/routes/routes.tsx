import authRoutes from '../../auth/routes/routes';
import HomeRoutes from '../../home/routes/routes';
import sharedRoutes from './sharedRoutes';

const routes = [...sharedRoutes, ...authRoutes, ...HomeRoutes];

export default routes;
