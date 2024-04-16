import { create } from 'zustand';
import { getItem, setItem } from '../lib/localStorage';
import { logger } from './logger';

interface CartState {
  data: string[];
}

export interface CartStore extends CartState {
  setData: (args: CartState['data']) => void;
}

const initialState: Pick<CartStore, keyof CartState> = {
  data: getItem('cart') ?? [],
};

const useCartStore = create<CartStore>()(
  logger<CartStore>(
    (set) => ({
      ...initialState,
      setData: (data) => {
        set(() => ({ data }));
        setItem('cart', data);
      },
    }),
    'CartStore'
  )
);

export default useCartStore;
