// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'secret',
};

export const rootConstants = {
  rootEmail: process.env.ROOT_EMAIL || 'root@email.com',
  rootPassword: process.env.ROOT_PASSWORD || 'sh@r3n3rgy',
  rootUsername: process.env.ROOT_USERNAME || 'desafiosharenergy',
};

export const databaseConstants = {
  url: process.env.DATABASE_URL || 'http://localhost:5576',
};
