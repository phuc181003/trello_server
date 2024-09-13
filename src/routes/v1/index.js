/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { GET_DB } from '~/config/mongodb'
import BoardRouter from './boardRoute'
const rootRouter = express.Router()
rootRouter.get('/', async (req, res) => {
  console.log(await GET_DB().listCollections().toArray())
  res.status(StatusCodes.OK).end('<h1>Hello World!</h1><hr>')
})
rootRouter.use('/boards', BoardRouter)
module.exports = rootRouter