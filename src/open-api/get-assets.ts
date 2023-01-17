export const getAssets = {
  tags: ['Asset'],
  descripti0on: 'Returns all users from the system',
  operationId: 'getAssets',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    '200': {
      description: 'A list of users.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              id: {
                type: 'number',
                description: 'Asset ID',
              },
              name: {
                type: 'string',
                description: 'Asset Name',
              },
              bookingValue: {
                type: 'object',
                description: 'Asset booking value, cash or securities in object format',
              },
              equityType: {
                type: 'string',
                description: 'Asset Password',
              },
            },
          },
        },
      },
    },
  },
};
