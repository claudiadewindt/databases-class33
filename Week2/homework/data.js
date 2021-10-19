const authors = [
  {
    author_no: 1,
    author_name: 'Julie Kagawa',
    university: 'Harvard University',
    date_of_birth: '1966-02-18',
    h_index: 28,
    gender: 'F',
    mentor: 20,
  },
  {
    author_no: 2,
    author_name: 'Michael Bennett',
    university: 'University of Oxford',
    date_of_birth: '1987-02-11',
    h_index: 25,
    gender: 'M',
    mentor: 17,
  },
  {
    author_no: 3,
    author_name: 'Lauren Oliver',
    university: 'University of Cambridge',
    date_of_birth: '1969-10-20',
    h_index: 29,
    gender: 'F',
    mentor: 16,
  },
  {
    author_no: 4,
    author_name: 'Jerry Weaver',
    university: 'Stanford University',
    date_of_birth: '1955-08-25',
    h_index: 43,
    gender: 'M',
    mentor: 18,
  },
  {
    author_no: 5,
    author_name: 'Samantha Young',
    university: 'Yale University',
    date_of_birth: '1960-01-02',
    h_index: 35,
    gender: 'F',
    mentor: 10,
  },
  {
    author_no: 6,
    author_name: 'Sven Groot',
    university: 'Utrecht University',
    date_of_birth: '1969-09-22',
    h_index: 24,
    gender: 'M',
    mentor: 9,
  },
  {
    author_no: 7,
    author_name: 'Colleen Hoover',
    university: 'University of Cambridge',
    date_of_birth: '1955-01-20',
    h_index: 19,
    gender: 'M',
    mentor: 3,
  },
  {
    author_no: 8,
    author_name: 'Michelle Leighton',
    university: 'Harvard University',
    date_of_birth: '1974-11-22',
    h_index: 51,
    gender: 'F',
    mentor: 8,
  },
  {
    author_no: 9,
    author_name: 'Mira Garland',
    university: 'Yale University',
    date_of_birth: '1963-06-11',
    h_index: 33,
    gender: 'F',
    mentor: 12,
  },
  {
    author_no: 10,
    author_name: 'Jay Crownover',
    university: 'Moscow State University',
    date_of_birth: '1980-12-12',
    h_index: 44,
    gender: 'M',
    mentor: 11,
  },
  {
    author_no: 11,
    author_name: 'Mario dos Santos',
    university: 'UFMG',
    date_of_birth: '1985-12-09',
    h_index: 22,
    gender: 'M',
    mentor: 1,
  },
  {
    author_no: 12,
    author_name: 'Ana Maria Silva',
    university: 'UFMG',
    date_of_birth: '1978-10-06',
    h_index: 53,
    gender: 'F',
    mentor: 2,
  },
  {
    author_no: 13,
    author_name: 'San Lee',
    university: 'University of Cambridge',
    date_of_birth: '1977-07-22',
    h_index: 54,
    gender: 'M',
    mentor: 6,
  },
  {
    author_no: 14,
    author_name: 'Alexandra Bracken',
    university: 'Utrecht University',
    date_of_birth: '1966-06-06',
    h_index: 31,
    gender: 'F',
    mentor: 4,
  },
  {
    author_no: 15,
    author_name: 'Kelly Hans',
    university: 'Harvard University',
    date_of_birth: '1981-08-17',
    h_index: 30,
    gender: 'M',
    mentor: 3,
  },
];

const research_Papers = [
  {
    paper_id: 5000,
    paper_title: 'The top 20 fails of science fiction movies in 2010',
    conference: 'Arts Conference',
    publish_date: '2014-01-11',
  },
  {
    paper_id: 5001,
    paper_title: 'The revival of cinema after the Britain emperors',
    conference: 'CinemaConference',
    publish_date: '2001-07-15',
  },

  {
    paper_id: 5002,
    paper_title:
      'The significance of civil war for the African Americans and average Americans',
    conference: 'History Conference',
    publish_date: '2016-07-15',
  },
  {
    paper_id: 5003,
    paper_title:
      'The increasing issue of bullying in school and university campuses',
    conference: 'Psychology Conference',
    publish_date: '2011-03-03',
  },
  {
    paper_id: 5004,
    paper_title: 'Why women are hesitant to report abuse',
    conference: 'Psychology Conference',
    publish_date: '2014-03-03',
  },
  {
    paper_id: 5005,
    paper_title: 'What causes domestic violence and how to control it',
    conference: 'Psychology Conference',
    publish_date: '2013-05-05',
  },
  {
    paper_id: 5006,
    paper_title:
      'Does the government or anybody else has a say in bad parenting',
    conference: 'Sociology Conference',
    publish_date: '2014-11-10',
  },
  {
    paper_id: 5007,
    paper_title: 'How to eradicate poverty from our community',
    conference: 'Humanitarian Conference',
    publish_date: '2020-05-06',
  },
  {
    paper_id: 5008,
    paper_title: 'Injustice breeds evil, give reasons to support your argument',
    conference: 'Law Conference',
    publish_date: '2015-04-01',
  },
  {
    paper_id: 5009,
    paper_title: 'The impact of technology in genetic engineering',
    conference: 'Tech Conference',
    publish_date: '2016-03-09',
  },
  {
    paper_id: 5010,
    paper_title: 'The role of smartphones as all in one devices',
    conference: 'Tech Conference',
    publish_date: '2016-06-05',
  },
  {
    paper_id: 5011,
    paper_title: 'Social media addiction',
    conference: 'Psychology Conference',
    publish_date: '2004-05-05',
  },
  {
    paper_id: 5012,
    paper_title: 'Limiting the consumption of junk foods in teens',
    conference: 'Health Conference',
    publish_date: '2014-12-27',
  },
  {
    paper_id: 5013,
    paper_title: 'Obesity in kids of the developed economies',
    conference: 'Health Conference',
    publish_date: '2006-10-10',
  },
  {
    paper_id: 5014,
    paper_title: 'Dairy products and how they should be used in a balance',
    conference: 'Nutrition Conference',
    publish_date: '2009-02-10',
  },
  {
    paper_id: 5015,
    paper_title: 'The production of horror movies since the last decade',
    conference: 'Cinema Conference',
    publish_date: '2015-03-06',
  },
  {
    paper_id: 5016,
    paper_title: 'The human evolution',
    conference: 'Evolution Conference',
    publish_date: '2011-11-11',
  },
  {
    paper_id: 5017,
    paper_title: 'What is the wormhole theory',
    conference: 'Theories Conference',
    publish_date: '2016-04-03',
  },
  {
    paper_id: 5018,
    paper_title: 'Big bang theory and before the big bang',
    conference: 'Science Conference',
    publish_date: '2015-03-04',
  },
  {
    paper_id: 5019,
    paper_title: 'Intelligence - inherited or developed',
    conference: 'Science Conference',
    publish_date: '2014-10-15',
  },
  {
    paper_id: 5020,
    paper_title: 'A Study of Vitamin C',
    conference: 'Health Conference',
    publish_date: '2014-11-10',
  },
  {
    paper_id: 5021,
    paper_title: 'A Discussion on the Importance of Social Informatics',
    conference: 'Tech Conference',
    publish_date: '2013-11-15',
  },
  {
    paper_id: 5022,
    paper_title: 'An Overview of Binary Codes in Computing',
    conference: 'Tech Conference',
    publish_date: '2014-11-01',
  },
  {
    paper_id: 5023,
    paper_title: 'A Study on the Code of Ethics in Nursing',
    conference: 'Ethics Conference',
    publish_date: '2010-03-11',
  },
  {
    paper_id: 5024,
    paper_title: 'The Hammurabi Code',
    conference: 'History Conference',
    publish_date: '2013-01-28',
  },
  {
    paper_id: 5025,
    paper_title: 'The Definition of Poverty',
    conference: 'Economy Conference',
    publish_date: '2012-11-05',
  },
  {
    paper_id: 5026,
    paper_title: 'Hunger, Malnutrition and Poverty',
    conference: 'Health and Economy Conference',
    publish_date: '2012-05-10',
  },
  {
    paper_id: 5027,
    paper_title: 'An Analysis of Money Laundering',
    conference: 'Law Conference',
    publish_date: '2011-01-05',
  },
  {
    paper_id: 5028,
    paper_title: 'The True Value of Money',
    conference: 'Economy Conference',
    publish_date: '2011-01-05',
  },
  {
    paper_id: 5029,
    paper_title: 'Money Does Talk',
    conference: 'Economy',
    publish_date: '2011-01-05',
  },
];

const author_papers = [
  { author_no: 1, paper_id: 500 },
  { author_no: 2, paper_id: 501 },
  { author_no: 3, paper_id: 502 },
  { author_no: 4, paper_id: 503 },
  { author_no: 5, paper_id: 504 },
  { author_no: 6, paper_id: 505 },
  { author_no: 7, paper_id: 506 },
  { author_no: 8, paper_id: 507 },
  { author_no: 9, paper_id: 508 },
  { author_no: 10, paper_id: 509 },
  { author_no: 11, paper_id: 5010 },
  { author_no: 12, paper_id: 5011 },
  { author_no: 13, paper_id: 5012 },
  { author_no: 14, paper_id: 5013 },
  { author_no: 15, paper_id: 5014 },
  { author_no: 1, paper_id: 5015 },
  { author_no: 2, paper_id: 5016 },
  { author_no: 3, paper_id: 5017 },
  { author_no: 4, paper_id: 5018 },
  { author_no: 5, paper_id: 5019 },
  { author_no: 6, paper_id: 5020 },
  { author_no: 7, paper_id: 5021 },
  { author_no: 8, paper_id: 5022 },
  { author_no: 9, paper_id: 5023 },
  { author_no: 10, paper_id: 5024 },
  { author_no: 11, paper_id: 5025 },
  { author_no: 12, paper_id: 5026 },
  { author_no: 13, paper_id: 5027 },
  { author_no: 14, paper_id: 5028 },
  { author_no: 15, paper_id: 5029 },
];

module.exports = { authors, research_Papers, author_papers };
