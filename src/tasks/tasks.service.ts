import { Injectable } from '@nestjs/common';
import { Task } from '../entity/task.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService extends TypeOrmCrudService<Task> {
    constructor(@InjectRepository(Task) repo: Repository<Task>) {
        super(repo);
    }
}
