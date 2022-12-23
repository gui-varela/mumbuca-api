import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AgencyDTO } from './agency.dto';
import { AgencyService } from './agency.service';

@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post()
  async create(@Body() data: AgencyDTO) {
    return this.agencyService.create(data);
  }

  @Get()
  async findAll() {
    return this.agencyService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: AgencyDTO) {
    return this.agencyService.update(id.toString(), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.agencyService.delete(id.toString());
  }
}
