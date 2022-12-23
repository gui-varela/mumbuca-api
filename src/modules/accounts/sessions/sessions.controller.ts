import { Body, Controller, Post } from '@nestjs/common';
import { SessionDTO } from '../user/session.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() data: SessionDTO) {
    return this.sessionsService.create(data);
  }
}
