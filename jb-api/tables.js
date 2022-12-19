const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('jeb.sqlite', sqlite.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
});

const sql = `create table jeb(ID integer primay key, data, category)`;
db.run(sql);
