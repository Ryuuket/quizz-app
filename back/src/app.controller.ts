import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import {  Post, Body } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body('username') username: string, @Body('password') password: string): Promise<{ accessToken: string }> {
    const accessToken = await this.authService.signUp(username, password);
    return { accessToken };
  }
}
