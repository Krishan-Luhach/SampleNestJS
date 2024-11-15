import { PartialType } from '@nestjs/mapped-types';
import { CreateAppCIDTO } from './CreateAppCI.dto';

export class UpdateAppCIDTO extends PartialType(CreateAppCIDTO) {}
