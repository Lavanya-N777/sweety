const fs = require('node:fs');
const path = require('node:path');

const schema = fs.readFileSync(path.join(__dirname, '..', 'sql', 'schema.sql'), 'utf8');

async function migrate(pool) {
  await pool.query(schema);
}

module.exports = { migrate };
