import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppCIService } from './appCI-details.service';
import { CreateAppCIDTO } from './dto/CreateAppCI.dto';
import { UpdateAppCIDTO } from './dto/UpdateAppCI.dto';

@Controller('appci')
export class AppCIContoller {
  constructor(private readonly appciService: AppCIService) {}

  @Get()
  //Fetch all AppCI details
  FindAll() {
    return this.appciService.FindAll();
  }

  @Post()
  //Create new AppCI Detail
  Create(@Body() user: CreateAppCIDTO) {
    return this.appciService.Create(user);
  }

  @Get(':id')
  //Fetch AppCI details by Id
  FindOne(@Param('id', ParseIntPipe) id: number) {
    return this.appciService.FindOne(id);
  }

  @Put(':id')
  //Update the AppCI details
  Update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: UpdateAppCIDTO,
  ) {
    return this.appciService.Update(id, updatedUser);
  }

  @Delete(':id')
  //To Delete AppCI details
  Delete(@Param('id', ParseIntPipe) id: number) {
    return this.appciService.Delete(id);
  }
}
