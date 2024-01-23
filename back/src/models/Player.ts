import { UUID } from 'crypto';

export class Player {
  private _id: UUID;
  private _name: string;
  private _email: string;
  private _password: string;
  private _score: number;

  constructor(
    id: UUID,
    name: string,
    email: string,
    pw: string,
    score: number,
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = pw;
    this._score = score;
  }

  public get id() {
    return this._id;
  }

  public set id(id: UUID) {
    this._id = id;
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get email() {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get password() {
    return this._password;
  }

  public set password(pw: string) {
    this._password = pw;
  }
}
