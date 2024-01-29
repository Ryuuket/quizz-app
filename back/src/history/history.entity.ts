import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  historyId: number

    /*questionid*/
  /*@Column()
  name: string*/
}