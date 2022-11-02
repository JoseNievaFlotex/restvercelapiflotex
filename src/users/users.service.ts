import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(userDetail: CreateUserDto) {
    const newUser = this.userRepository.create({
       ...userDetail });
       this.userRepository.save(newUser);
  }

  async findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findBy({ idUsuario: id});
  }

  update(id: number, updateUserDetails: UpdateUserDto) {
    this.userRepository.update(id, {...updateUserDetails});
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
