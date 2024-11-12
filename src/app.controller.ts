import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios, { Axios, AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  async getHello(): Promise<AxiosResponse> {
    let obj: AxiosResponse = await axios.get('https://catfact.ninja/fact');
    return obj.data;
  }
}
