import { Controller, Get, Post, Body,  Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
 constructor(private userService: UsersService){}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
   this.userService.create(createUserDto) ;
  }

  @Get()
   findAll() {
   return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id' , ParseIntPipe) id: number) {
    return this.userService.findOne(id)
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.userService.remove(id)
  }
}
