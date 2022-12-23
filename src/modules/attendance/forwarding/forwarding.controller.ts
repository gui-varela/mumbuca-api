import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ForwardingDTO } from './forwarding.dto';
import { ForwardingService } from './forwarding.service';

@Controller('forwarding')
export class ForwardingController {
  constructor(private readonly forwardingService: ForwardingService) {}

  @Post()
  async create(@Body() data: ForwardingDTO) {
    return this.forwardingService.create(data);
  }

  @Get()
  async findAll() {
    return this.forwardingService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ForwardingDTO) {
    return this.forwardingService.update(id.toString(), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.forwardingService.delete(id.toString());
  }
}
