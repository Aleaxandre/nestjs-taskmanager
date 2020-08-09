import { Injectable, Inject, Logger } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(@Inject(UsersService) private userService: UsersService) {}

  async signUp(username: string, password: string): Promise<void> {
    // try {
    await this.userService.signUp(username, password);
    // } catch (error) {
    //   Logger.error(`Failed to signup user ${username} : ${error.message}`);
    //   throw error;
    // }
  }
}
