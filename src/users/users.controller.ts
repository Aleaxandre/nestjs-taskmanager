import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from 'src/entity/user.entity';

@Crud({
  model: { type: User },
  params: {
    uuid: { field: 'uuid', primary: true, type: 'uuid' },
  },
  query: { maxLimit: 10, alwaysPaginate: true },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
