import Container, { Service } from 'typedi';
import AssetRepository from '../repositories/AssetRepository';
import { Asset, Type } from '../models/Asset';

@Service()
export default class AssetService {
  private assetRepository = Container.get(AssetRepository);

  async createAsset(name: string, booking_value: number, equity: Type, shareCount?: number, sharePrice?: number, currency?: string) {
    const result = this.assetRepository.createAsset(name, booking_value, equity, shareCount, sharePrice, currency);
    return result;
  };

  async getAllAssets() {
    return await this.assetRepository.getAllAssets();
  };

  getAssetById(id: string): Promise<Asset | null> {
    return this.assetRepository.findById(id);
  }
}
