import { Cat } from '../entities/cat.entity'
export type CreateCatDto = Omit<Cat, 'id'>

export type UpdateCatDto = Partial<CreateCatDto> & {
  id: number
}
