import Car from '@/types/Car'

export type State = {
  cars: Array<Car>;
}

export const state: State = {
  cars: []
}
