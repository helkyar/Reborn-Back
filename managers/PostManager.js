const { MongoClient } = require("mongodb");
const data = require("../resources/mockdata");
const database = "reborn";
const collect = "posts";
const title = "title";
const value = "Mi precioso armarrio empotrado";
const idOfPost = "621a41b81cd62a952fc60be6";
/**
 * Database connection
 */
async function PostManager() {
  const uri = `mongodb://localhost:27017/${database}`;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //lista databases
    listDatabases(client);
    //insert new entry
    // createPost(client, data);
    //find post by id
    findOneProduct(client, title, value);
    console.log("Connected!");
  } catch (e) {
    console.error(e);
  }
}

/**
 * Check databases in mongodb [only for testing]
 * (!) Remove before production
 * @param {MongoClient} client
 */
async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

/**
 * Insert new post based on client post request
 * @param {MongoClient} client
 * @param {json} newProduct
 */
async function createPost(client, newProduct) {
  const result = await client
    .db(database)
    .collection(collect)
    .insertOne(newProduct);

  console.log(`Created new post with id: ${result.insertedId}`);
}

/**
 * Find
 * @param {MongoClient} client
 * @param {string} idOfPost
 */
async function findOneProduct(client, key, value) {
  const result = await client
    .db("ecommerce")
    .collection("products")
    // .find({ _id: idOfPost });
    .findOne({ key: value });

  if (result) {
    console.log(`Found a product in the collection with the name
'${idOfPost}'`);
    console.log(result);
  } else {
    console.log("Product/s not found");
  }
}

module.exports = PostManager;
