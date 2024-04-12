import { create } from 'zustand';
import { logger } from './logger';
import { getItem, setItem } from '../lib/localStorage';

interface CartState {
  data: string[];
}

export interface CartStore extends CartState {
  setData: (args: CartState['data']) => void;
}

const initialState: Pick<CartStore, keyof CartState> = {
  data: getItem('cart') || [],
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
