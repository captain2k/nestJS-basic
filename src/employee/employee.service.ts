import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEmployee, Employee } from './employee.entity'

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepo.find({ order: { id: 'ASC' } })
  }

  createOne(newEmployee: CreateEmployee) {
    this.employeeRepo.insert(newEmployee)
  }

  update(id: number, employeeUpdate: CreateEmployee) {
    this.employeeRepo.update({ id }, employeeUpdate)
    // this.employeeRepo
    //   .createQueryBuilder()
    //   .update('employee')
    //   .set(employeeUpdate)
    //   .where('id = :id', { id: id })
    //   .execute()
  }

  delete(id: number) {
    this.employeeRepo.delete(id)
  }
}
