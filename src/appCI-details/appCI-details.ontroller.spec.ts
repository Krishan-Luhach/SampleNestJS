import { Test, TestingModule } from '@nestjs/testing';
import { AppCIService } from './appCI-details.service';
import { AppCIContoller } from './appCI-details.controller';
import { AppCIDetail } from './appCI-details.entity';

describe('UsersController', () => {
  // describe used to group related test cases
  let controller: AppCIContoller;
  const mockService = {
    Create: jest.fn(),
    FindAll: jest.fn(),
    FindOne: jest.fn(),
    Update: jest.fn(),
    Delete: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppCIContoller],
      providers: [
        {
          provide: AppCIService,
          useValue: mockService,
        },
      ],
    }).compile();

    controller = module.get<AppCIContoller>(AppCIContoller);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });
  //Testing create function
  test('Create=> will add appci-details to the database', async () => {
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

    jest.spyOn(mockService, 'Create').mockReturnValue(detail);

    const result = await controller.Create(createAppciDTO);

    expect(mockService.Create).toHaveBeenCalled();
    expect(mockService.Create).toHaveBeenCalledWith(createAppciDTO);
    expect(result).toEqual(detail);
  });

  //Testing findAll function
  test('FindAll => return arrays of all appci details', async () => {
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

    jest.spyOn(mockService, 'FindAll').mockReturnValue(details);
    //act

    const result = await controller.FindAll();

    //assert
    expect(mockService.FindAll).toHaveBeenCalled();
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
    jest.spyOn(mockService, 'FindOne').mockReturnValue(detail);

    const result = await controller.FindOne(id);

    expect(mockService.FindOne).toHaveBeenCalledWith(id);

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
    jest.spyOn(mockService, 'Update').mockReturnValue(message);

    const result = await controller.Update(id, detail);

    expect(result).toEqual(message);
    expect(mockService.Update).toHaveBeenCalledWith(id, detail);
  });

  //Testing Delete function

  test('Delete => deleted the appci detail for particular id', async () => {
    const id: number = 1;
    const message = 'AppCI detail with id 1 is deleted successfully';

    jest.spyOn(mockService, 'Delete').mockReturnValue(message);

    const result = await controller.Delete(id);

    expect(mockService.Delete).toHaveBeenCalledWith(id);

    expect(result).toEqual(message);
  });
});
