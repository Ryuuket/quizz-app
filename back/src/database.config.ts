/*import { createConnection, ConnectionOptions } from 'typeorm';
import { Player } from './player/player.entity';

export const createDatabaseConnection = async (): Promise<void> => {
  try {
    const connectionOptions: ConnectionOptions = {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Player],
      synchronize: true,
    };

    const connection = await createConnection(connectionOptions);

    console.log('Connected to the database');

    // You can perform additional setup or logging here if needed.
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
};*/