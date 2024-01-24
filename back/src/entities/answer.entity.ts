import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  answerId: number;

  @Column()
  answerContent: string;

  @Column({ default: false })
  answerIsCorrect: boolean;

  @ManyToOne(type => Question, question => question.answers)
  @JoinColumn({ name: 'questionId' })
  question: Question;
}
