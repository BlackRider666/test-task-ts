import { GetterTree } from 'vuex'
import { RootState } from '@/store'
import { State } from './state'
import Car from '@/types/Car'

export type Getters = {
  getCars(state: State): Array<Car> | null;
}

export const getters: GetterTree<State, RootState> & Getters = {
  getCars: (state) => state.cars
}
