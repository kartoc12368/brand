import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'src/shared/entity/user.entity';
import axios from 'axios';
import { DateRepository } from './date.repository';
import { DateTrack } from 'src/shared/entity/date.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly dateRepository: DateRepository,
  ) {}
  async addApiKey(apiKey: string) {
    const user = new User();
    user.apiKey = apiKey;
    await this.userRepository.save(user);
  }

  async findAll(date: any) {
    const ids = await this.userRepository.find();
    ids.forEach((id) => {
      console.log(id.apiKey);
      const response = axios({
        method: 'GET',
        url: `https://desktime.com/api/v2/json/employee?apiKey=${id?.apiKey}&id=595573&date=${date}`,
      });

      const dateTrack = new DateTrack();
      dateTrack.date = date;
      dateTrack.arrived = response?.data?.arrived;
      dateTrack.left = response?.data?.left;
      // await this.dateRepository.save(dateTrack);
    });
  }
}
