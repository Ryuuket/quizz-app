import { Answer } from 'src/answer/answer.entity';
import { History } from 'src/history/history.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  questionId: number;

  @Column({ nullable: true })
  questionContent: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @ManyToOne(() => History, (history) => history.questions)
  @JoinColumn({ name: 'historyId' })
  history: History;
}
