import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Answer } from './answer.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  questionId: number;

  @Column()
  questionContent: string;

  @OneToMany(type => Answer, answer => answer.question)
  answers: Answer[];
}