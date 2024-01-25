import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { PlayerModule } from './player/player.module'
import { Player } from './player/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'adminuser',
      password: 'adminpassword',
      database: 'mydatabase',
      entities: [Player],
      synchronize: true,
    }),
  ],
  //controllers: [],
  //providers: [AppService],
})
export class AppModule {}
