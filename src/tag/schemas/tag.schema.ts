import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tag extends Document {
  @Prop({ required: true })
  customer: string;

  @Prop({ required: true })
  partNo: string;

  @Prop({ required: true })
  partName: string;

  @Prop({ required: true })
  po: string;

  @Prop({ required: true })
  lot: string;

  @Prop({ required: true })
  qty: number;

  @Prop({ required: true })
  productionDate: Date;

  @Prop({ required: true })
  deliveryDate: Date;

  @Prop()
  imageUrl: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
