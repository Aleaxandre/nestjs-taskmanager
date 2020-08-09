import {
  Controller,
  Post,
  Request,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/entity/user.entity';
import { UserCredentialsDTO } from './dto/user-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(public service: AuthService) {}

  @Post('signup')
  async signup(
    @Body(ValidationPipe) userCredentialsDTO: UserCredentialsDTO,
  ): Promise<Partial<User>> {
    try {
      await this.service.signUp(
        userCredentialsDTO.username,
        userCredentialsDTO.password,
      );
      return { username: userCredentialsDTO.username };
    } catch (error) {
      throw error;
    }
  }
}
