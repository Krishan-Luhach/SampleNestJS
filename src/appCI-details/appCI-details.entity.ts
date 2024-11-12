import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AppCIDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  appciCode:string
  @Column()
  serviceClassification: string;

  @Column()
  operationStatus: string;

  @Column()
  hostingType: string;

  @Column()
  businessCriticality: string;

  @Column()
  ownedBy: string;

  @Column()
  managedBy: string;

  @Column()
  cImaintainedBy: string;
}
