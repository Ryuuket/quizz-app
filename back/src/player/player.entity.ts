import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { History } from 'src/history/history.entity'

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

  @OneToMany(() => History, (history) => history.player)
  histories: History[];
}
