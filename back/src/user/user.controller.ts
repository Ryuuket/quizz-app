import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() body: User) {
    return this.userService.create(body);
  }
}
