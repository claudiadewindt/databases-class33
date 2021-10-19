const CREATE_TABLE_AUTHORS = `CREATE TABLE authors (author_no INT PRIMARY KEY NOT NULL,
  author_name VARCHAR(50), university VARCHAR(50), date_of_birth DATE, h_index INT, gender ENUM('M', 'F'));`;

const ADD_MENTOR_COLUMN = `ALTER TABLE authors ADD mentor INT, 
ADD CONSTRAINT FOREIGN KEY(mentor) REFERENCES authors(author_no);`;

const CREATE_TABLE_RESEARCH_PAPERS = `CREATE TABLE IF NOT EXISTS research_Papers 
(paper_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
  paper_title VARCHAR(200), 
  conference VARCHAR(200), 
  publish_date DATE);`;

const CREATE_TABLE_AUTHORS_RESEARCH_PAPERS = `CREATE TABLE IF NOT EXISTS authors_research_Papers (
  author_no INT NOT NULL,
  paper_id INT NOT NULL,
  FOREIGN KEY(author_no) REFERENCES authors(author_no), 
  FOREIGN KEY(paper_id) REFERENCES research_Papers(paper_id)
    );`;

const AUTHORS_AND_THERE_MENTORS = `SELECT a.author_name, b.author_name as mentor FROM authors AS a JOIN authors b ON a.mentor = b.author_no;`;

const AUTHORS_INFORMATION_AND_PAPERS_TITLE = `SELECT a.* , b.paper_title FROM authors AS a LEFT JOIN authors_research_papers ON a.author_no = authors_research_papers.author_no LEFT JOIN research_papers AS b ON authors_research_papers.paper_id = b.paper_id;`;

const RESEARCHES_AND_NUMBER_OF_AUTHORS = `SELECT a.paper_title, count(author_no) AS num_of_authors FROM research_papers AS a LEFT JOIN authors_research_papers as b ON a.paper_id = b.paper_id GROUP BY paper_title ;`;

const NUMBER_OF_PAPERS_WRITTEN_BY_FEMALES = `SELECT COUNT(paper_id) AS papers_written_by_females FROM authors AS a JOIN authors_research_papers AS b ON a.author_no = b.author_no WHERE gender = "F";`;

const AVERAGE_INDEX_BY_UNIVERSITY = `SELECT university, AVG(h_index) FROM authors GROUP BY university;`;

const PAPERS_BY_UNIVERSITY = `SELECT university, COUNT(a.paper_id) FROM research_papers AS a LEFT JOIN authors_research_papers ON a.paper_id = authors_research_papers.paper_id LEFT JOIN authors AS b ON authors_research_papers.author_no = b.author_no GROUP BY university;`;

const MIN_MAX_INDEX_BY_UNIVERSITY = `SELECT university, min(h_index) , max(h_index)
FROM authors
GROUP BY university;`;

module.exports = {
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
};
