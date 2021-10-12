const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world',
});

const queries = [
  // What are the names of countries with population greater than 8 million?
  `SELECT * FROM country WHERE population > 8000000 ORDER BY continent;`,

  // What are the names of countries that have “land” in their names?
  `SELECT * FROM country WHERE name LIKE '%land%';`,

  // What are the names of the cities with population in between 500,000 and 1 million?
  `SELECT * FROM city WHERE population BETWEEN 500000 AND 1000000 ORDER BY population;`,

  // What's the name of all the countries on the continent ‘Europe’?
  `SELECT * FROM country WHERE continent = 'europe';`,

  // List all the countries in the descending order of their surface areas.
  `SELECT * FROM country ORDER BY SurfaceArea desc;`,

  // What are the names of all the cities in the Netherlands?
  `SELECT * FROM city WHERE countryCode = 'NLD';`,

  // What is the population of Rotterdam?
  `SELECT name, population FROM city WHERE countryCode = 'NLD' AND name='Rotterdam';`,

  // What's the top 10 countries by Surface Area?
  `SELECT * FROM country ORDER BY SurfaceArea desc LIMIT 10;`,

  // What's the top 10 most populated cities?
  `SELECT * FROM city ORDER BY population desc LIMIT 10;`,

  // What is the population number of the world?
  `SELECT SUM(population) AS 'total population' FROM country;`,
];

connection.connect();

queries.forEach((query) => {
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
