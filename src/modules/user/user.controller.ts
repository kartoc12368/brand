import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/add/:id')
  async addApiKey(@Param('id') apiKey: string) {
    await this.userService.addApiKey(apiKey);
  }

  @Get('/find/:date')
  async getStartTimebyDate(@Param('date') date: any) {
    const response = await this.userService.findAll(date);
    console.log(response);
  }
}
