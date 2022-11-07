import { MutationTree } from 'vuex'
import { State } from './state'
import Car from '@/types/Car'

export type Mutations<S = State> = {
  ['ADD_CAR'](state: S, payload: Car): void;
}

export const mutations: MutationTree<State> & Mutations = {
  'ADD_CAR' (state: State, car: Car) {
    state.cars.push(car)
  }
}
