import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AttendanceTypeDTO } from './attendance-type.dto';
import { AttendanceTypeService } from './attendance-type.service';

@Controller('attendance-type')
export class AttendanceTypeController {
  constructor(private readonly attendanceTypeService: AttendanceTypeService) {}

  @Post()
  async create(@Body() data: AttendanceTypeDTO) {
    return this.attendanceTypeService.create(data);
  }

  @Get()
  async findAll() {
    return this.attendanceTypeService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: AttendanceTypeDTO) {
    return this.attendanceTypeService.update(id.toString(), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.attendanceTypeService.delete(id.toString());
  }
}
