const mysql = require('mysql');
const {
  INSERT_INTO_ACCOUNT,
  INSERT_ACCOUNT_CHANGES,
} = require('./transitions-insert-values');

const {
  START_TRANSACTION,
  MINUS_AMOUNT,
  PLUS_AMOUNT,
  COMMIT,
  ROLLBACK,
} = require('./transition');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

const execQuery = function (err, result) {
  if (err) throw err;
  console.log('Query executed');
};

db.connect(execQuery);

db.query('DROP DATABASE IF EXISTS bank', execQuery);

// Create database
db.query('CREATE DATABASE bank', execQuery);

// USE database
db.query('USE bank', execQuery);

// Create tables
const account =
  'CREATE TABLE IF NOT EXISTS account(account_number INT PRIMARY KEY, balance NUMERIC(10,2))';

const account_changes = `CREATE TABLE IF NOT EXISTS account_changes(change_number INT PRIMARY KEY, account_number INT,
   amount NUMERIC(10,2), changed_date DATE, remark TEXT, FOREIGN KEY(account_number) REFERENCES account(account_number));`;

// Create account table
//you could have used async-await promisify for these queries.
(async () => {
  await db.query(account, execQuery);
  await db.query(account_changes, execQuery);
  await db.query(INSERT_INTO_ACCOUNT, execQuery);
  await db.query(INSERT_ACCOUNT_CHANGES, execQuery);
  await db.query(START_TRANSACTION, execQuery);
  await db.query(MINUS_AMOUNT, execQuery);
  await db.query(PLUS_AMOUNT, execQuery);
  await db.query(COMMIT, execQuery);
  await db.query(ROLLBACK, execQuery);
  db.end();
})();
