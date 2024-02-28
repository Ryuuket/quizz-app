import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto'; // Import the crypto module
import { UserService } from './src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signUp(username: string, password: string): Promise<string> {
    const hashedPassword = this.hashPassword(password);

    const payload = { username };
    return this.jwtService.sign(payload);
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.validateUser(username);
    const isPasswordValid = this.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.jwtService.sign({ username: user.username });
  }

  async validateUser(username: string): Promise<any> {
    const user = await this.userService.findByEmail(username);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  private hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');
    return `${hash}.${salt}`;
  }

  private verifyPassword(password: string, hashedPassword: string): boolean {
    const [hash, salt] = hashedPassword.split('.');
    const verifyHash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');
    return hash === verifyHash;
  }
}
