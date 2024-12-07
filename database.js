import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'getbase_owner',
  host: 'ep-frosty-glade-a5wi8tgm.us-east-2.aws.neon.tech',
  database: 'getbase',
  password: 'EO1vuZRYsg7V',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});
