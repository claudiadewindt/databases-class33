const createCity = async (client, newCity) => {
  const result = await client
    .db('new_world')
    .collection('city')
    .insertOne(newCity);
  console.log(result);
};

module.exports = createCity;
