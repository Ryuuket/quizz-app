import { UUID } from 'crypto';
import { Question } from './Question';

export class Answer {
  private _id: UUID;
  private _content: string;
  private _isCorrect: boolean;
  private _question: Question;

  constructor(
    id: UUID,
    content: string,
    isCorrect: boolean,
    question: Question,
  ) {
    this._id = id;
    this._content = content;
    this._isCorrect = isCorrect;
    this._question = question;
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

  public get isCorrect() {
    return this._isCorrect;
  }

  public set isCorrect(isCorrect: boolean) {
    this._isCorrect = isCorrect;
  }

  public get question() {
    return this._question;
  }

  public set question(question: Question) {
    this._question = question;
  }
}
