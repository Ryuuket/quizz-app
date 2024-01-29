import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module';

import { PlayerModule } from './player/player.module';
import { HistoryModule } from './history/history.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [
    PlayerModule,
    QuestionModule,
    AnswerModule,
    HistoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'adminuser',
      password: process.env.DB_PASSWORD || 'adminpassword',
      database: process.env.DB_NAME || 'mydatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
