import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  answerId: number

  @Column({nullable: true})
  answerContent: string;

  @Column({default: false})
  correctAnswer: boolean;
}