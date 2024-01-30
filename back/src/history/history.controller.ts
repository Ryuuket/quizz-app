import { Body, Controller, Get, Post } from '@nestjs/common';
import { HistoryService } from './history.service';
import { History } from './history.entity';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  getHistories() {
    return this.historyService.findAll();
  }

  @Post()
  createHistory(@Body() body: History) {
    return this.historyService.create(body);
  }
}
