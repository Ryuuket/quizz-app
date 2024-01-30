import { Player } from 'src/player/player.entity';
import { Question } from 'src/question/question.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  historyId: number

  @OneToMany(() => Question, (question) => question.history)
  questions: Question[]

  @ManyToOne(type => Player, player => player.histories)
  @JoinColumn({ name: 'playerId' })
  player: Player;
}