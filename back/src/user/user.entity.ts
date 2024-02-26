import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { History } from 'src/history/history.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  score: number;

  @Column({ nullable: false })
  isAdmin: boolean;

  @Column({ nullable: true })
  username: string;

  @OneToMany(() => History, (history) => history.user)
  histories: History[];
}
