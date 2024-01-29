import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private readonly answerRepository: Repository<Answer>,
      ) {}
    
      create(answer: Answer): Promise<Answer> {
        return this.answerRepository.save(answer)
      }
    
      findAll(): Promise<Answer[]> {
        return this.answerRepository.find()
      }
}
