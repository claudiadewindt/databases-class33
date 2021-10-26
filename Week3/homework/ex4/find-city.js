const findCity = async (client, cityName) => {
  const result = await client
    .db('new_world')
    .collection('city')
    .findOne({ Name: cityName });
  if (result) {
    console.log(`City '${cityName} found':`);
    console.log(result);
  } else {
    console.log(`No cities found with the name '${cityName}'`);
  }
};

const findCityByCode = async (client, countryCode) => {
  const result = await client
    .db('new_world')
    .collection('city')
    .find({ CountryCode: countryCode })
    .toArray();
  console.log(result);
};

module.exports = { findCity, findCityByCode };
