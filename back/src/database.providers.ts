/*import { DataSource } from 'typeorm';
import { Player } from './player/player.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'adminuser',
        password: 'adminpassword',
        database: 'test',
        entities: [Player],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
*/