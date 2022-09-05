import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Employee {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @Column()
  salary: number

  @Column()
  age: number
}

export type CreateEmployee = Omit<Employee, 'id'>
