import { IsIn, Length } from "class-validator"

export class CreateAppCIDTO{
  serviceClassification: string

  @Length(3,3)
  appciCode:string
  
  operationStatus: string

  @IsIn(["On Premise","Hybrid","Public Cloud"])

  hostingType: string

  businessCriticality: string

  ownedBy: string

  managedBy: string

  cImaintainedBy:string
}