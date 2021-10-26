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

const START_TRANSACTION = 'START TRANSACTION';
const MINUS_AMOUNT =
  'UPDATE account SET balance = balance - 1000 WHERE account_number = 101';
const PLUS_AMOUNT =
  'UPDATE account_changes SET amount = amount + 1000 WHERE account_number = 102';
const COMMIT = 'COMMIT';
const ROLLBACK = 'ROLLBACK';

db.end();

module.exports = {
  START_TRANSACTION,
  MINUS_AMOUNT,
  PLUS_AMOUNT,
  COMMIT,
  ROLLBACK,
};
