import { Module } from '@nestjs/common';
import { AppCIService } from './appCI-details.service';
import { AppCIContoller } from './appCI-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppCIDetail } from './appCI-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppCIDetail])],
  controllers: [AppCIContoller],
  providers: [AppCIService],
})
export class AppCIModule {}
