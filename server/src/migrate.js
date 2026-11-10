require('dotenv').config({ path: process.env.ENV_FILE || '.env' });
const { createPool } = require('./db');
const { migrate } = require('./migrations');

async function main() {
  const pool = createPool();
  try { await migrate(pool); console.log('Database schema is up to date.'); }
  finally { await pool.end(); }
}
if (require.main === module) main().catch(error => { console.error(error); process.exit(1); });
module.exports = { main };
