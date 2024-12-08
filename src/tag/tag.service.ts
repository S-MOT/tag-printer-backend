import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './schemas/tag.schema';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  async create(tagData: any): Promise<Tag> {
    const newTag = new this.tagModel(tagData);
    return newTag.save();
  }

  // //TODO [GET] /qr/
async getfruitlevel(: string): Promise<any> {

  try {

  } catch (error) {
    return {
      'status': 'error',
      'message': error.message,
      'data': null
    };
  }
}
}
