/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
const { MongoClient, ServerApiVersion } = require('mongodb')

const URI = 'mongodb+srv://phuc07860:ughlnS9fr1j8qeYV@cluster0-trello.7uepk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-trello'
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
}
)

