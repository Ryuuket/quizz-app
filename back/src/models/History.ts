import { UUID } from 'crypto';
import { Player } from './Player';
import { Question } from './Question';

export class History {
  private _id: UUID;
  private _player: Player;
  private _question: Question;

  constructor(id: UUID, player: Player, question: Question) {
    this._id = id;
    this._player = player;
    this._question = question;
  }

  public get id() {
    return this._id;
  }

  public set id(id: UUID) {
    this._id = id;
  }

  public get player() {
    return this._player;
  }

  public set player(player: Player) {
    this._player = player;
  }

  public get question() {
    return this._question;
  }

  public set question(question: Question) {
    this._question = question;
  }
}
