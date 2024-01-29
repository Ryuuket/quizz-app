import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  playerId: number;

  @Column({nullable: true})
  playerName: string;

  @Column({nullable: true})
  playerEmail: string;

  @Column({nullable: true})
  playerPassword: string;

  @Column({nullable: true})
  playerScore: number;
}
