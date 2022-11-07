import { createStore } from 'vuex'

import { store as cars, CarsStore, State as CarsState } from '@/store/modules/cars'

export type RootState = {
  cars: CarsState;
};

export type Store = CarsStore<Pick<RootState, 'cars'>>;

export const store = createStore({
  modules: {
    cars
  }
})

export function useStore (): Store {
  return store as Store
}
