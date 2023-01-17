import { AssetInputRequest } from '../requests/AssetInputRequest';
import { Container } from 'typedi';
import AssetController from '../controllers/AssetController';
import RequestValidator from '../middlewares/RequestValidator';
import Route from './RouteAbstract';

class AssetRoutes extends Route {
  private assetController = Container.get(AssetController);

  constructor() {
    super();
    this.prefix = '/asset';
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.get('/', this.assetController.getAllAssets);
    this.router.get('/:id', this.assetController.getAssetById);
    this.router.post('/', RequestValidator.validate(AssetInputRequest), this.assetController.createAsset);
  }
}

export default AssetRoutes;
