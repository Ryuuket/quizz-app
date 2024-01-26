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
/*
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player/player.entity';
import { PlayerModule } from './player/player.module'

@Module({
  /*imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '',
      database: 'test',
      /*host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'adminuser',
      password: process.env.DB_PASSWORD || 'adminpassword',
      database: process.env.DB_NAME || 'mydatabase',*/
      //entities: [Player],
      //synchronize: true,
      //migrationsTableName: 'typeorm_migrations',
      //migrations: ['src/migrations/*.ts'],
    //}),
    //PlayerModule,
  //],/*
  //imports: [PlayerModule, TypeOrmModule.forRoot({
    //  type: 'postgres',
      //host: 'localhost',
      //port: 5432,
     // username: 'adminuser',
     // password: 'adminpassword',
     // database: 'test',
      //entities: [Player],
      //synchronize: true,
  //})],
  //controllers: [AppController],
  //providers: [AppService],
//})*/

//export class AppModule {}

/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*//*
import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createDatabaseConnection } from './database.config';
//import { PlayerModule } from './player/player.module'
import { Player } from './player/player.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Player],
      synchronize: true,
      //migrationsTableName: 'typeorm_migrations',
      //migrations: ['src/migrations/*.ts'],
    }),
  ],
  //controllers: [],
  //providers: [AppService],
})

export class AppModule {
  constructor() {
    // Call the function to create the database connection
    createDatabaseConnection();
  }
}*/
