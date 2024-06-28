import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'src/shared/entity/user.entity';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly httpService: HttpService,
  ) {}
  async addApiKey(apiKey: string) {
    const user = new User();
    user.apiKey = apiKey;
    await this.userRepository.save(user);
  }

  async findAll(date: any) {
    const response = await axios({
      method: 'GET',
      url: `https://desktime.com/api/v2/json/employee?apiKey=32b86551a696949a01fa16cb383808c0&id=595573&date=${date}`,
    });

    return response?.data;
  }
}
