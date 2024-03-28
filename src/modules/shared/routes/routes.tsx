import authRoutes from '../../auth/routes/routes';
import HomeRoutes from '../../home/routes/routes';
import instructorRoutes from '../../instructor/routes/routes';
import sharedRoutes from './sharedRoutes';

const routes = [...sharedRoutes, ...authRoutes, ...HomeRoutes, ...instructorRoutes];

export default routes;
