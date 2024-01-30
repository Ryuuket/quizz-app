import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Answer } from './answer.entity';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  getAnswers() {
    return this.answerService.findAll();
  }

  @Post()
  createAnswer(@Body() body: Answer) {
    return this.answerService.create(body);
  }
}
