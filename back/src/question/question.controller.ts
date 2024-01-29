import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  getQuestions() {
    return this.questionService.findAll();
  }

  @Post()
  createQuestion(@Body() body: Question) {
    return this.questionService.create(body);
  }
}
