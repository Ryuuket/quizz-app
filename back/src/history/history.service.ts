import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History} from './history.entity';

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History)
        private readonly historyRepository: Repository<History>,
      ) {}
    
      create(history: History): Promise<History> {
        return this.historyRepository.save(history)
      }
    
      findAll(): Promise<History[]> {
        return this.historyRepository.find()
      }
}
