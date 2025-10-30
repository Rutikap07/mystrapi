import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
    host: env('DATABASE_HOST', 'dpg-d41ldu7gi27c739l16kg-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'blog_dgfh'),
      user: env('DATABASE_USERNAME', 'blog'),
      password: env('DATABASE_PASSWORD', 'macznJ9ogKH0Du6KiVcLO4BFWqUIAyqy'),
      ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false,
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});

