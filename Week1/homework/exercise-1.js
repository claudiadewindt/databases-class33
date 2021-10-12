const util = require('util');
const mysql = require('mysql');

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
  const createDatabase = `CREATE DATABASE IF NOT EXISTS meetup ;
   USE meetup`;

  const createTable_invitee = `CREATE TABLE IF NOT EXISTS 
    Invitee(invitee_no INT NOT NULL AUTO_INCREMENT,
    invitee_name VARCHAR(30),
    invited_by VARCHAR(30),
    PRIMARY KEY(invitee_no))`;

  const createTable_room = `CREATE TABLE IF NOT EXISTS 
    Room(room_no INT NOT NULL,
    room_name VARCHAR(30),
    floor_number INT,
    PRIMARY KEY (room_no))`;

  const createTable_meeting = `CREATE TABLE IF NOT EXISTS 
    Meeting(meeting_no INT NOT NULL AUTO_INCREMENT, 
    meeting_title VARCHAR(50), 
    starting_time TIMESTAMP, 
    ending_time TIMESTAMP ,
    room_no INT,PRIMARY KEY(meeting_no),
    FOREIGN KEY (room_no) REFERENCES room(room_no))`;

  // Inserting values

  const fillTable_invitee = `INSERT INTO 
    invitee(invitee_name,invited_by ) 
    VALUES('Maria Lee', 'Jose Sans'),
      ('Paul Silva','Peter Luis'),
      ('Ana Santos','Fran Smith'),
      ('Eric Windt','Ed Windt'),
      ('Suzan Oliver','Alice Cooper')`;

  const fillTable_room = `INSERT INTO 
    room(room_no, room_name,floor_number ) 
    VALUES(12, 'Ideation Zone', 4),
      (16, 'Collective IQ Room',1),
      (13, 'Inspiration Station',1),
      (15, 'Team Territory',3),
      (10, 'Creative Arena',2)`;

  const fillTable_meeting = `INSERT INTO 
    meeting(meeting_title,starting_time,ending_time,room_no ) 
    VALUES('Meeting','2021-09-09 15:00:00','2021-09-09 16:30:00', 12 ),
      ('Interview','2021-10-02 10:30:00','2021-10-02 11:30:00', 16 ),
      ('Planning','2021-10-09 16:00:00','2021-10-09 18:30:00', 13  ),
      ('Cocktails','2021-10-02 19:45:00','2021-10-02 21:00:00', 15),
      ('Brainstorming','2021-10-03 11:00:00','2021-10-03 13:00:00', 10 )`;

  connection.connect();

  try {
    await Promise.all([
      executeQuery(checkDatabase('meetup')),
      executeQuery(createDatabase),
    ]);
    console.log('Database is created');

    await Promise.all([
      executeQuery(createTable_invitee),
      executeQuery(createTable_room),
      executeQuery(createTable_meeting),
    ]);
    console.log('Tables are created');

    await Promise.all([
      executeQuery(fillTable_invitee),
      executeQuery(fillTable_room),
      executeQuery(fillTable_meeting),
    ]);
    console.log('Tables are Filled');
  } catch (err) {
    console.log(err, 'Error');
  }

  connection.end();
})();
