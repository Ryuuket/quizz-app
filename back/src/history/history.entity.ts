import { User } from 'src/user/user.entity';
import { Question } from 'src/question/question.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

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
