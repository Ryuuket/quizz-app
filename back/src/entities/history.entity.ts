/* ce bloc de code conserve les questions auxquelles le joueur a mal répondu */
/*    history_id SERIAL PRIMARY KEY,
    player_id SERIAL REFERENCES player(player_id),
    question_id SERIAL REFERENCES question(question_id),
    PRIMARY KEY (player_id, question_id) */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  historyId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}