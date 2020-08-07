import { Controller } from '@nestjs/common';
import { Task } from '../entity/task.entity';
import { CrudController, Crud } from "@nestjsx/crud";
import { TasksService } from './tasks.service';

@Crud({
    model: { type: Task },
    params: {
        uuid: { field: 'uuid', primary: true, type: 'uuid' }
    },
    query: { maxLimit: 10, alwaysPaginate: true },
})
@Controller('tasks')
export class TasksController implements CrudController<Task> { constructor(public service: TasksService) { } }
