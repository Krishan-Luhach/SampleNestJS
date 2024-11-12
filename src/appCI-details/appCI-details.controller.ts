import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppCIService } from './appCI-details.service';
import { CreateAppCIDTO } from './dto/CreateAppCI.dto';
import { UpdateAppCIDTO } from './dto/UpdateAppCI.dto';

@Controller('appci')
export class AppCIContoller {
  constructor(private readonly usersService: AppCIService) {}

  @Get()
  //Fetch all AppCI details
  FindAll(){
    return this.usersService.FindAll()
  }

  @Post()
  //Create new AppCI Detail
  Create(@Body() user:CreateAppCIDTO){
    return this.usersService.Create(user)
  }

  @Get(':id')
  //Fetch AppCI details by Id
  FindOne(@Param('id',ParseIntPipe) id:number){
    return this.usersService.FindOne(id)
  }

  @Put(':id')
  //Update the AppCI details

  Update(@Param('id',ParseIntPipe) id:number, @Body() updatedUser:UpdateAppCIDTO){
    return this.usersService.Update(id,updatedUser)
  }

  @Delete(':id')
  //To Delete AppCI details

  Delete(@Param('id',ParseIntPipe) id:number){
    return this.usersService.Delete(id)
  }
}
