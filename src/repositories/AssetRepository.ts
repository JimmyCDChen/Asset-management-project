import { Asset, Type } from '../models/Asset';
import { Service } from 'typedi';

@Service()
export default class AssetRepository {
  async createAsset(name: string, booking_value: number, type: Type, shareCount?: number, sharePrice?: number, currency?: string): Promise<Asset> {
    var asset = Asset.build({ name, booking_value, type, shareCount, sharePrice, currency });
    return await asset.save();
  };

  async findById(id: string): Promise<Asset | null> {
    return await Asset.findOne({ where: { id: id } });
  };

  async getAllAssets(): Promise<Asset[]> {
    return await Asset.findAll();
  };
}
