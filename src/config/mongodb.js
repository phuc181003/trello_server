import { ENV } from './environment'

let databaseIntance = null
const { MongoClient, ServerApiVersion } = require('mongodb')
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(ENV.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
}
)
// connect MongoDB
export const CONNECT_DB = async () => {

  // Connect DB to the server (optional starting in v4.7)
  await client.connect()
  databaseIntance = client.db(ENV.DATABASE_NAME)
}
// đóng kết nối tới database khi cần
export const CLOSE_DB = async () => {
  await client.close()
}
export const GET_DB = () => {
  if (!databaseIntance) throw new Error('Must connect to Database fist')
  return databaseIntance
}


