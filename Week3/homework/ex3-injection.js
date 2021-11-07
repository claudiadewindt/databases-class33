const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world',
  multipleStatements: true,
});

const execQuery = util.promisify(conn.query.bind(conn));

async function getPopulation(Country, name, code, log) {
  conn.connect();

  try {
    const result = await Promise.all([
      execQuery(
        `PREPARE stmt FROM 'SELECT Population FROM ${Country} WHERE Name = ? and code = ?'`,
      ),
      execQuery(`SET @name ='${name}'`),
      execQuery(`SET @code ='${code}'`),
      execQuery(`EXECUTE stmt USING @name, @code; `),
    ]);

    if (result[3].length < 1) {
      log(new Error('Not found'));
    }
    console.log(result[3][0].Population);

    conn.end();
  } catch (err) {
    log(err);
    conn.end();
  }
}

getPopulation('country', 'brazil', 'BRA', console.log);