import { Request } from 'express';
import AssetService from '../services/AssetService';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class AssetController {
  constructor(public assetService: AssetService) { }

  createAsset = asyncWrapper(async (req: Request) => {
    const { name, booking_value, equity, shareCount, sharePrice, currency } = req.body;
    const response = await this.assetService.createAsset(name, booking_value, equity, shareCount, sharePrice, currency);
    return new SuccessResponse(response);
  });

  getAllAssets = asyncWrapper(async () => {
    const response = await this.assetService.getAllAssets();
    return new SuccessResponse(response);
  });

  getAssetById = asyncWrapper(async (req: Request) => {
    const { id } = req.params;
    const response = await this.assetService.getAssetById(id);
    return new SuccessResponse(response);
  });

}
