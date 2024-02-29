import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.find();
  }

  async findUserById(id: number): Promise<User | undefined> {
    return await this.findOne({ where: { id } }); // Explicitly specify the id in the where clause
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return await this.findOne({ where: { email } });
  }

  async updateUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete(id);
  }
}
