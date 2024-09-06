/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import Router from '~/routes/v1'
import { mapOrder } from '~/utils/sorts.js'
import { client } from '~/config/mongodb'

const app = express()

const hostname = 'localhost'
const port = 8017
app.use('/api/v1', Router)


// connect MongoDB
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`server running at http://${hostname}:${port}/`)
})
