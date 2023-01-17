import AssetService from "../../src/services/AssetService"
import AssetRepository from "../../src/repositories/AssetRepository";
import { Type } from "../../src/models/Asset";

describe('AssetService', () => {
  const service = new AssetService();

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAsset should success', () => {
    it('should create cash asset', async () => {
      const assetRepoSpy = jest.spyOn(AssetRepository.prototype, "createAsset").mockImplementation();
      await service.createAsset("saving", 150000.0, Type.CASH, undefined, undefined, "USD");
      expect(assetRepoSpy).toHaveBeenCalledWith("saving", 150000.0, "CASH", undefined, undefined, "USD");
    });

    it('should create securities asset', async () => {
      const assetRepoSpy = jest.spyOn(AssetRepository.prototype, "createAsset").mockImplementation();
      await service.createAsset("saving", 150000.0, Type.SECURITIES, 150, 1000, undefined);
      expect(assetRepoSpy).toHaveBeenCalledWith("saving", 150000.0, "SECURITIES", 150, 1000, undefined);
    });
  });
});