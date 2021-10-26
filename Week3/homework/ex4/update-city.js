const updateCity = async (client, documentName, entries) => {
  const result = await client
    .db('new_world')
    .collection('city')
    .updateOne({ Name: documentName }, { $set: entries });
  console.log(result);
};

module.exports = updateCity;
