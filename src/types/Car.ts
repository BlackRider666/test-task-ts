import Brand from '@/types/CarTypes/Brand'
import Engine from '@/types/CarTypes/Engine'
import Exterior from '@/types/CarTypes/Exterior'
import Interior from '@/types/CarTypes/Interior'

export default interface Car {
  brand: Brand,
  engine: Engine,
  airSuspension: boolean,
  exterior:Exterior,
  interior: Interior
  [key: string]: any
}
