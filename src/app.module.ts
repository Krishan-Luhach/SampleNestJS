import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppCIDetail } from './appCI-details/appCI-details.entity';
import { AppCIModule } from './appCI-details/appCI-details.module';

@Module({  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'root',
      password: 'krishan123',
      database: 'appci_db',
      entities: [AppCIDetail],
      synchronize: true,
    }),
    AppCIModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
