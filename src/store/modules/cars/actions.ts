import { ActionTree, ActionContext } from 'vuex'

import { RootState } from '@/store'
import { State } from './state'
import { Mutations } from './mutations'
import Car from '@/types/Car'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  ['ADD_CAR'](
    { commit }: AugmentedActionContext,
    car: Car
  ): Promise<boolean>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async 'ADD_CAR' ({ commit }, car) {
    return new Promise(() => {
      setTimeout(() => {
        console.log(car)
        commit('ADD_CAR', car)
      }, 500)
    })
  }
}
