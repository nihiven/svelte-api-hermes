const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const url = require('url');

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('jeb.sqlite', sqlite.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
});
let sql;

app.use(bodyParser.json());

// post request
app.post('/jeb', (req, res) => {
  try {
    //console.log(req.body.data, req.body.category);
    const { data, category } = req.body;
    sql = `INSERT INTO jeb (data, category) VALUES (?, ?)`;
    db.run(sql, [data, category], (err) => {
      if (err) return res.json({ status: 300, success: false, error: err });
      console.log('successful input', data, category);
    });
    res.json({ status: 200, success: true });
  } catch (error) {
    return res.json({ status: 400, success: false });
  }
});

// get request
app.get('/jeb', (req, res) => {
  try {
    const { category } = url.parse(req.url, true).query;

    sql = `SELECT * FROM jeb`;
    if (category) sql += ` WHERE category = ?`;

    db.all(sql, [category], (err, rows) => {
      if (err) {
        console.log(sql);
        return res.json({ status: 300, success: false, error: err });
      }
      if (rows.length === 0) return res.json({ status: 300, success: false, error: 'No data found' });
      res.json({ status: 200, success: true, data: rows });
    });
  } catch (err) {
    return res.json({ status: 400, success: false, error: err });
  }
});

app.listen(3000);
