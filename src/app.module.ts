import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/'),
    // 'mongodb://iiot-center2:%24nc.ii0t%402o2E@10.0.0.8:27017/iDEE_DEV?authSource=admin',
  TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
