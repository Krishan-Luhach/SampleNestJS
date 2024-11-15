import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppCIDetail } from './appCI-details.entity';
import { Repository } from 'typeorm';
import { CreateAppCIDTO } from './dto/CreateAppCI.dto';
import { UpdateAppCIDTO } from './dto/UpdateAppCI.dto';

@Injectable()
export class AppCIService {
  constructor(
    @InjectRepository(AppCIDetail)
    private readonly appciRepository: Repository<AppCIDetail>,
  ) {}

  //Create AppCI details
  async Create(appciDetail: CreateAppCIDTO) {
    const createdDetail = await this.appciRepository.save(appciDetail);
    return createdDetail;
  }

  //Fetch all AppCI details

  FindAll() {
    return this.appciRepository.find();
  }

  //Find AppCI details by id

  FindOne(id: number) {
    return this.appciRepository.findOneBy({
      id,
    });
  }

  //Updating the AppCI details
  async Update(id: number, updateDetail: UpdateAppCIDTO) {
    await this.appciRepository.update({ id }, { ...updateDetail });
    return `AppCI detail with id ${id} is updated successfully`;
  }

  //Deleting the AppCI details

  async Delete(id: number) {
    const detailToDelete = await this.appciRepository.findOneBy({ id });
    await this.appciRepository.remove(detailToDelete);
    return `AppCI detail with id ${id} is deleted successfully`;
  }
}
