/*import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { Player } from './player/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '',
      database: 'test',
      entities: [Player],
      synchronize: true,
    }),
  })],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}*/
