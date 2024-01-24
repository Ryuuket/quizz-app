
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  playerId: number;

  @Column()
  playerName: string;

  @Column()
  playerEmail: string;

  @Column()
  playerPassword: string;

  @Column()
  playerScore: number;
}
