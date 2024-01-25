import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(Player)
        private readonly playerRepository: Repository<Player>
      ) {}
    
      create(player: Player): Promise<Player> {
        return this.playerRepository.save(player)
      }
    
      findAll(): Promise<Player[]> {
        return this.playerRepository.find()
      }
}
