import { Injectable, Logger } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo: Repository<User>) {
    super(repo);
  }

  async signUp(username: string, password: string): Promise<void> {
    // try {
    await this.repo.save({ username, password });
    // } catch (error) {
    //   Logger.error(`Failed to signup user ${username}.`);
    //   throw error;
    // }
  }
}
