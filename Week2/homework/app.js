const mysql = require('mysql');
const util = require('util');

const {
  CREATE_TABLE_AUTHORS,
  ADD_MENTOR_COLUMN,
  CREATE_TABLE_RESEARCH_PAPERS,
  CREATE_TABLE_AUTHORS_RESEARCH_PAPERS,
  AUTHORS_AND_THERE_MENTORS,
  AUTHORS_INFORMATION_AND_PAPERS_TITLE,
  RESEARCHES_AND_NUMBER_OF_AUTHORS,
  NUMBER_OF_PAPERS_WRITTEN_BY_FEMALES,
  AVERAGE_INDEX_BY_UNIVERSITY,
  PAPERS_BY_UNIVERSITY,
  MIN_MAX_INDEX_BY_UNIVERSITY,
} = require('./query');

const { authors, research_Papers, author_papers } = require('./data');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  multipleStatements: true,
});

// node native promisify
const executeQuery = util.promisify(connection.query.bind(connection));

(async () => {
  const checkDatabase = (database) => {
    return `DROP DATABASE IF EXISTS ${database}`;
  };
  const createDatabase = `CREATE DATABASE IF NOT EXISTS papers;
   USE papers;`;

  connection.connect();

  try {
    await Promise.all([
      executeQuery(checkDatabase('papers')),
      executeQuery(createDatabase),
    ]);
    console.log('Database is created');

    await Promise.all([
      (executeQuery(CREATE_TABLE_AUTHORS),
      executeQuery(CREATE_TABLE_RESEARCH_PAPERS)),
      executeQuery(ADD_MENTOR_COLUMN),
      executeQuery(CREATE_TABLE_AUTHORS_RESEARCH_PAPERS),
    ]);

    authors.forEach(async (author) => {
      await executeQuery('INSERT INTO authors SET ?', author);
    });
    research_Papers.forEach(async (research) => {
      await executeQuery('INSERT INTO research_papers SET ?', research);
    });
    author_papers.forEach(async (author_paper) => {
      await executeQuery(
        'INSERT INTO authors_research_papers set ?',
        author_paper,
      );
    });

    const joins_aggregate_functions = await Promise.all([
      executeQuery(AUTHORS_AND_THERE_MENTORS),
      executeQuery(AUTHORS_INFORMATION_AND_PAPERS_TITLE),
      executeQuery(RESEARCHES_AND_NUMBER_OF_AUTHORS),
      executeQuery(NUMBER_OF_PAPERS_WRITTEN_BY_FEMALES),
      executeQuery(AVERAGE_INDEX_BY_UNIVERSITY),
      executeQuery(PAPERS_BY_UNIVERSITY),
      executeQuery(MIN_MAX_INDEX_BY_UNIVERSITY),
    ]);
    console.log(joins_aggregate_functions);
  } catch (error) {
    console.log(error.message);
  }
})();
