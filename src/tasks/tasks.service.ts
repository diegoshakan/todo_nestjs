import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task)
  }

  findAll() {
    return this.taskRepository.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOne({ where: { id },
      relations: {
      user: true
      }
    });

    if (!task) {
      throw new NotFoundException(`Task id ${id} not found`)
    }

    return task
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.preload({
      id: +id,
      ... updateTaskDto
    });

    if (!task) {
      throw new NotFoundException(`Taks ID ${id} not found`);
    }

    return this.taskRepository.save(task)
  }

  async remove(id: number) {
    const task = await this.taskRepository.findOne({where: { id } });

    if (!task) {
      throw new NotFoundException(`Taks ID ${id} not found`);
    }

    return this.taskRepository.remove(task);
  }
}
