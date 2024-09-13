/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from 'express'
import exitHook from 'async-exit-hook'
import Router from '~/routes/v1'
import { CLOSE_DB, CONNECT_DB } from '~/config/mongodb'
import { ENV } from './config/environment'
import { errorHandlingMiddleware } from './middlewares/handlingMiddleware'
const START_SERVER = () => {
  const app = express()

  app.use(express.json())
  app.use('/api/v1', Router)

  app.use(errorHandlingMiddleware)
  app.get('*', async (req, res) => {
    res.end('<h1> path does not exist!</h1><hr>')
  })
  app.listen(ENV.APP_PORT, ENV.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`3:server running at http://${ENV.APP_HOST}:${ENV.APP_PORT}/`)
  })
  // thực hiện đóng các tác vụ cleanup trước khi dừng server
  exitHook(() => {
    console.log('4. server is shuting down...')
    CLOSE_DB()
    console.log('5. disconnect from MongoDB Cloud Atlas')

  })
}

console.log('1:Connecting to MongoDB cloud Atlast!')
CONNECT_DB()
  .then(() => console.log('2:Connected to MongoDB cloud Atlast'))
  .then(() => START_SERVER())
  .catch(Error => {
    console.error(Error)
    process.exit(0)
  })