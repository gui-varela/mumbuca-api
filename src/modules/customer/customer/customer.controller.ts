import { Body, Controller, Post } from '@nestjs/common';
import { CustomerDTO } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() data: CustomerDTO) {
    return this.customerService.create(data);
  }
}
