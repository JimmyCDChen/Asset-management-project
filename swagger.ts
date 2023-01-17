import { getAssets } from './src/open-api/get-assets';
export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'Asset management project',
    termsOfService: '',
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'Users',
    },
  ],
  paths: {
    '/asset': {
      get: getAssets,
    },
  },
  servers: [
    {
      url: 'http://localhost:4000/api/v1',
      description: 'Local server',
    },
    {
      url: 'https://your_production_url/api/v1',
      description: 'Production Env',
    },
  ],
};
