import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player/player.entity';

@Module({
  imports: [
    PlayerModule,
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USER || 'adminuser',
        password: process.env.DB_PASSWORD || 'adminpassword',
        database: process.env.DB_NAME || 'mydatabase',
        entities: [Player],
        synchronize: true,
        autoLoadEntities: true,
      })
    ],
})
export class AppModule {}