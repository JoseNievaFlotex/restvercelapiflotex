import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '172.16.1.206',
      username: 'RETAILUSER',
      password: 'retail',
      database: 'DBFLOTEX2022',
      autoLoadEntities: true,
      synchronize: true,
      options: {
        encrypt:false,
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      },
    })
    ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
