const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const url = require('url');
var cors = require('cors');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('jeb.sqlite', sqlite.OPEN_READWRITE, (err) => {
  if (err) return console.error(err);
});
let sql;

app.use(cors());
app.use(bodyParser.json());

function jebPost(req, res) {
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
}
function jebGet(req, res) {
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
}

function appPost(req, res) {
  try {
    const name = req.body.name;
    sql = `INSERT INTO apps (name, created_at, updated_at) VALUES (?, datetime('now'), datetime('now'))`;
    db.run(sql, [name], (err) => {
      if (err) return res.json({ status: 300, success: false, error: err });
      console.log('successful input: apps');
      return res.json({ status: 200, success: true });
    });
  } catch (error) {
    return res.json({ status: 400, success: false });
  }
}
function appGet(req, res) {
  try {
    const { app_id } = url.parse(req.url, true).query;

    sql = `SELECT * FROM apps`;
    if (app_id) sql += ` WHERE id = ?`;

    db.all(sql, [app_id], (err, rows) => {
      if (err) {
        console.log(sql);
        return res.json({ status: 300, success: false, error: err });
      }
      if (rows.length === 0) return res.json({ status: 300, success: false, error: 'No data found' });
      res.json(rows);
    });
  } catch (err) {
    return res.json({ status: 400, success: false, error: err });
  }
}

function prefGetByAppId(req, res) {
  try {
    const app_id = req.params.app_id;
    sql = `SELECT * FROM preferences WHERE app_id = ?`;

    db.all(sql, [app_id], (err, rows) => {
      if (err) {
        return res.json({ status: 300, success: false, error: err });
      }
      if (rows.length === 0) return res.json({ status: 300, success: false, error: 'No data found' });
      res.json(rows);
    });
  } catch (err) {
    return res.json({ status: 400, success: false, error: err });
  }
}

function prefGetAll(req, res) {
  try {
    sql = `SELECT * FROM preferences`;

    db.all(sql, (err, rows) => {
      if (err) {
        return res.json({ status: 300, success: false, error: err });
      }
      if (rows.length === 0) return res.json({ status: 300, success: false, error: 'No data found' });
      res.json(rows);
    });
  } catch (err) {
    return res.json({ status: 400, success: false, error: err });
  }
}

app.post('/jeb', jebPost);
app.get('/jeb', jebGet);

app.post('/app', appPost);
app.get('/app', appGet);

app.get('/pref/:app_id', prefGetByAppId);
app.get('/pref', prefGetAll);

app.listen(3000);
