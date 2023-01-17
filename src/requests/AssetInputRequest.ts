import { IsNotEmpty } from 'class-validator';
import { Type } from '../models/Asset';

export class AssetInputRequest {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  bookingValue: number;

  currency?: string;

  shareCount?: number;

  sharePrice?: number;

  @IsNotEmpty()
  equityType: Type;
}
