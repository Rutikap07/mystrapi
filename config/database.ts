import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '193.203.184.65'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'u859302333_strapi'),
      user: env('DATABASE_USERNAME', 'u859302333_strapi'),
      password: env('DATABASE_PASSWORD', 'Zaahid97!'),
      ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
