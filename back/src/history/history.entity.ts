<<<<<<< HEAD
import { Player } from 'src/player/player.entity';
import { Question } from 'src/question/question.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
=======
import { User } from 'src/user/user.entity';
import { Question } from 'src/question/question.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
>>>>>>> 67321451f90c4ddcb822043306087b74b2f4eb6d

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Question, (question) => question.history)
  questions: Question[];

  @ManyToOne(() => User, (user) => user.histories)
  @JoinColumn({ name: 'id' })
  user: User;
}
