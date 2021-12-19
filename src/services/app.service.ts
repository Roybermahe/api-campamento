import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/repos/user.repository';

@Injectable()
export class AppService {

  constructor(
    private readonly UserRepo: UserRepository
  ) {}

  async getHello() {
    return await this.UserRepo.find();
  }

  async saveData() {
    return await this.UserRepo.add({ name: 'juan', lastname: 'alberto' });
  }
}
