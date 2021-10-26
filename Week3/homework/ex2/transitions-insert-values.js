const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

db.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

const INSERT_INTO_ACCOUNT =
  'INSERT INTO account VALUES (101, 2000),(102,3000),(103,3500.25)';

const INSERT_ACCOUNT_CHANGES =
  "INSERT INTO account_changes VALUES (1,101,150,'2021-09-10','car lease'),(2,102,2500,'2021-09-15','house rent'),(3,103,4000,'2021-09-25','university')";

db.end();

module.exports = { INSERT_INTO_ACCOUNT, INSERT_ACCOUNT_CHANGES };
