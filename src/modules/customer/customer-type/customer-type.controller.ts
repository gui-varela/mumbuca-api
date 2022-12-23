import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerTypeDTO } from './customer-type.dto';
import { CustomerTypeService } from './customer-type.service';

@Controller('customer-type')
export class CustomerTypeController {
  constructor(private readonly customerTypeService: CustomerTypeService) {}

  @Post()
  async create(@Body() data: CustomerTypeDTO) {
    return this.customerTypeService.create(data);
  }

  @Get()
  async findAll() {
    return this.customerTypeService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CustomerTypeDTO) {
    return this.customerTypeService.update(id.toString(), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.customerTypeService.delete(id.toString());
  }
}
