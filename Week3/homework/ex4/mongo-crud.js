require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const { createCity } = require('./create-city');
const { updateCity } = require('./update-city');
const { findCity } = require('./find-city');
const { findCityByCode } = require('./find-city');
const { deleteCity } = require('./delete-city');

const findData = async () => {
  const url = `mongodb+srv://claudia:${process.env.PASSWORD}@testcluster1.bbkde.mongodb.net/new_world?retryWrites=true&w=majority`;

  const client = new MongoClient(url);

  try {
    await client.connect();
    await createCity(client, {
      Name: 'Den Haag',
      CountryCode: 'NLD',
      District: 'Zuid-Holland',
    });
    await updateCity(client, 'Den Haag', {
      Population: 500000,
    });
    await findCity(client, 'Den Haag');
    await findCityByCode(client, 'NLD');
    await deleteCity(client, 'Den Haag');
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

findData().catch(console.error);
