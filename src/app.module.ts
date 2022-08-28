import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Employee } from './employee/employee.entity'
import { EmployeeModule } from './employee/employee.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'CRUD-nestjs',
      entities: [Employee],
    }),
    EmployeeModule,
  ],
})
export class AppModule {}
