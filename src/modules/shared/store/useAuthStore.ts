import { create } from 'zustand';
import { logger } from './logger';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState['isAuthenticated']) => void;
  setUser: (args: AuthState['user']) => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false,
  user: {},
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIsAuthenticated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }));
        console.log(isAuthenticated);
      },
      setToken: () => {},
      setUser: (user) => {
        set(() => ({ user }));
      },
    }),
    'authStore'
  )
);

export default useAuthStore;
