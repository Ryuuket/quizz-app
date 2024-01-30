import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async login(email: string, pw: string): Promise<User> {
    const user: Promise<User> = await this.userRepository
      .findOne({
        where: { email: email, password: pw },
      })
      .catch((e) => {
        console.log(e);
        return undefined;
      });
    (user): user is User => user !== undefined;
    if ((await user).password === pw) {
      return user;
    } else {
      return undefined;
    }
  }
}
