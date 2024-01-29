import { Question } from 'src/question/question.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  answerId: number

  @Column({nullable: true})
  answerContent: string;

  @Column({default: false})
  correctAnswer: boolean;

  @ManyToOne(type => Question, question => question.answers)
  @JoinColumn({ name: 'questionId' })
  question: Question;
}