import { UUID } from 'crypto';

export class Question {
  private _id: UUID;
  private _content: string;

  constructor(id: UUID, content: string) {
    this._id = id;
    this._content = content;
  }

  public get id() {
    return this._id;
  }

  public set id(id: UUID) {
    this._id = id;
  }

  public get content() {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }
}
