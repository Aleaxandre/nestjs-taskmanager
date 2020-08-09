import { IsString, MinLength, Matches, MaxLength } from 'class-validator';

export class UserCredentialsDTO {
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  password: string;
}
