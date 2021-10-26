const deleteCity = async (client, cityName) => {
  const result = await client
    .db('new_world')
    .collection('city')
    .deleteOne({ Name: cityName });
  if (result) {
    console.log(
      `Deleted a city in the collection with the name '${cityName}':`,
    );
    console.log(result);
  } else {
    console.log(`No cities found with the name '${cityName}'`);
  }
};

module.exports = deleteCity;
