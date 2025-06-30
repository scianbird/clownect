//I need to use PG here to create the database pool - connection string valiue should be saved in the .env file
//pg needs to be installed in the project!
import * as pg from "pg";
const { Pool } = pg;

export const db = new pg.Pool({
  connectionString: process.env.NEXT_DB_URL,
});
