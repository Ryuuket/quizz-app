import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from './src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService,
    private readonly userService: UserService,
    ) {}

  async signUp(username: string, password: string): Promise<string> {
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const payload = { username };
    return this.jwtService.sign(payload);
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.validateUser(username);
  
    
    
    return this.jwtService.sign({ username: user.username });
  }
  
  

  async validateUser(username: string): Promise<any> {
    const user = await this.userService.findByEmail(username);
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    return user;
  }
  
  
}
