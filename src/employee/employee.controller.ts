import { Controller, Get } from '@nestjs/common'
import { Employee } from './employee.entity'
import { EmployeeService } from './employee.service'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  async getAll(): Promise<Employee[]> {
    return await this.employeeService.findAll()
  }
}
