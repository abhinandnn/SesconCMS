module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',['41ee240b64c552997fd39921b28754a14c3630d956be9679cb914043acc012c9','7487c24c5682d146a3b3b26be7dcb6c45df82d7830b38865f50ab0272876345f']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
