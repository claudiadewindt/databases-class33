const mysql = require('mysql');
const util = require('util');
const queries = require('./query');
const { authors, research_Papers, author_papers } = require('./data');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  connection.connect();

  try {
    await execQuery(`DROP DATABASE IF EXISTS papers;`);
    await execQuery(`CREATE DATABASE papers;`);
    await execQuery(`USE papers;`);

    // Exercise 1: Keys
    await execQuery(queries.authors.table_creation);
    await execQuery(queries.authors.add_mentor);

    //Exercise 2: Relationships
    await execQuery(queries.research_Papers.table_creation);
    await execQuery(queries.authors_researches.table_creation);
    await execQuery(queries.authors.insertion, [authors]);
    await execQuery(queries.research_Papers.insertion, [research_Papers]);
    await execQuery(queries.authors_researches.insertion, [author_papers]);

    // Exercise 3: Joins
    const author_mentor = await execQuery(queries.joins.join_authors_mentors);
    const author_research_paper = await execQuery(
      queries.joins.join_authors_paper_title,
    );
    console.log(author_mentor, author_research_paper);

    // Exercise 4: Aggregate Functions
    const research_papers_count = await execQuery(
      queries.aggregation.aggregate_papers_authors,
    );
    const females_researches = await execQuery(
      queries.aggregation.aggregate_papers_female,
    );
    const avg_h_index = await execQuery(
      queries.aggregation.aggregate_hIndex_university,
    );
    const papers_per_university = await execQuery(
      queries.aggregation.aggregate_papers_university,
    );
    const min_max = await execQuery(
      queries.aggregation.aggregate_min_max_hIndex,
    );
    console.log(
      research_papers_count,
      females_researches,
      avg_h_index,
      papers_per_university,
      min_max,
    );
  } catch (err) {
    console.log(err.message);
  }
  connection.end();
};

seedDatabase();
