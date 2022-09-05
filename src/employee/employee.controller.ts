import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common'
import { CreateEmployee, Employee } from './employee.entity'
import { EmployeeService } from './employee.service'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  async getAll(): Promise<Employee[]> {
    return await this.employeeService.findAll()
  }

  @Post('add')
  @HttpCode(201)
  createOne(@Body() newEmployee: CreateEmployee) {
    this.employeeService.createOne(newEmployee)
  }

  @Put('update/:id')
  @HttpCode(200)
  update(@Param('id') id: number, @Body() newEmployee: CreateEmployee) {
    this.employeeService.update(id, newEmployee)
  }

  @Delete('delete/:id')
  @HttpCode(200)
  delete(@Param('id') id: number) {
    this.employeeService.delete(id)
  }
}
