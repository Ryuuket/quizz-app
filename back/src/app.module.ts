import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Player } from './player/player.entity';
import { Answer } from './answer/answer.entity';
import { History } from './history/history.entity';

import { PlayerModule } from './player/player.module';
import { AnswerModule } from './answer/answer.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    PlayerModule,
    AnswerModule,
    HistoryModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USER || 'adminuser',
        password: process.env.DB_PASSWORD || 'adminpassword',
        database: process.env.DB_NAME || 'mydatabase',
        entities: [Player, Answer, History],
        synchronize: true,
        autoLoadEntities: true,
      }),
    ],
})
export class AppModule {}