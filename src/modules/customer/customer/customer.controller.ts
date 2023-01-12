import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CustomerDTO } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() data: CustomerDTO) {
    return this.customerService.create(data);
  }

  @Get()
  findByCPF(@Query('cpf') cpf: string) {
    return this.customerService.findByCPF(cpf);
  }
}
