import { Test, TestingModule } from '@nestjs/testing';
import { AppCIService } from './appCI-details.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AppCIDetail } from './appCI-details.entity';

describe('UsersService', () => {
  // describe used to group related test cases
  let service: AppCIService;
  const mockRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppCIService,
        {
          provide: getRepositoryToken(AppCIDetail),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AppCIService>(AppCIService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });
  //Testing create function
  test('create=> will add appci-details to the database', async () => {
    const createAppciDTO = {
      serviceClassification: 'Application service',
      appciCode: 'ECJ',
      operationStatus: 'In Production',
      hostingType: 'Cloud',
      businessCriticality: 'Critical',
      ownedBy: 'Chris Thompson',
      managedBy: 'Kunal Kamboj',
      cImaintainedBy: 'Fred Wang',
    };

    const detail = {
      id: 1,
      serviceClassification: 'Application service',
      appciCode: 'ECJ',
      operationStatus: 'In Production',
      hostingType: 'Cloud',
      businessCriticality: 'Critical',
      ownedBy: 'Chris Thompson',
      managedBy: 'Kunal Kamboj',
      cImaintainedBy: 'Fred Wang',
    } as AppCIDetail;

    jest.spyOn(mockRepository, 'save').mockReturnValue(detail);

    const result = await service.Create(createAppciDTO);

    expect(mockRepository.save).toHaveBeenCalled();
    expect(mockRepository.save).toHaveBeenCalledWith(createAppciDTO);
    expect(result).toEqual(detail);
  });

  //Testing findAll function
  test('findAll=>return arrays of all appci details', async () => {
    //arrange
    const detail = {
      serviceClassification: 'Application service',
      appciCode: 'ECJ',
      operationStatus: 'In Production',
      hostingType: 'Cloud',
      businessCriticality: 'Critical',
      ownedBy: 'Chris Thompson',
      managedBy: 'Kunal Kamboj',
      cImaintainedBy: 'Fred Wang',
    };
    const details = [detail];

    jest.spyOn(mockRepository, 'find').mockReturnValue(details);
    //act

    const result = await service.FindAll();

    //assert
    expect(mockRepository.find).toHaveBeenCalled();
    expect(result).toEqual(details);
  });

  //Testing FindOne

  test('FindOne => return appci-detail for a particular id', async () => {
    const detail = {
      id: 1,
      serviceClassification: 'Application service',
      appciCode: 'ECJ',
      operationStatus: 'In Production',
      hostingType: 'Cloud',
      businessCriticality: 'Critical',
      ownedBy: 'Chris Thompson',
      managedBy: 'Kunal Kamboj',
      cImaintainedBy: 'Fred Wang',
    };
    const id = 1;
    jest.spyOn(mockRepository, 'findOneBy').mockReturnValue(detail);

    const result = await service.FindOne(id);

    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id });

    expect(result).toEqual(detail);
  });

  //Testing Update function

  test('Update => returns success message if update is successfull', async () => {
    const detail = {
      serviceClassification: 'Application service',
      appciCode: 'ECJ',
      operationStatus: 'In Production',
      hostingType: 'On-prem',
    };
    const message = 'AppCI detail with id 1 is updated successfully';
    const id = 1;
    jest.spyOn(mockRepository, 'update').mockReturnValue(message);

    const result = await service.Update(id, detail);

    expect(result).toEqual(message);
    expect(mockRepository.update).toHaveBeenCalledWith({ id }, detail);
  });

  //Testing Delete function

  test('Delete => deleted the appci detail for particular id', async () => {
    const id: number = 1;
    const message = 'AppCI detail with id 1 is deleted successfully';

    const detail = {
      id: 1,
      serviceClassification: 'Application service',
      appciCode: 'ECJ',
      operationStatus: 'In Production',
      hostingType: 'Cloud',
      businessCriticality: 'Critical',
      ownedBy: 'Chris Thompson',
      managedBy: 'Kunal Kamboj',
      cImaintainedBy: 'Fred Wang',
    };

    jest.spyOn(mockRepository, 'remove').mockReturnValue(message);
    jest.spyOn(mockRepository, 'findOneBy').mockReturnValue(detail);

    const result = await service.Delete(id);

    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id });
    expect(mockRepository.remove).toHaveBeenCalledWith(detail);

    expect(result).toEqual(message);
  });
});
