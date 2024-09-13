import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { GET_DB } from '~/config/mongodb'
import { Boardvalidation } from '~/validations/BoardValidation'
import { BoardController } from '~/controllers/BoardController'
const BoardRouter = express.Router('/')
  .get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.status(StatusCodes.OK).end('<h1>Boards!</h1><hr>')
  })
  .post('/', Boardvalidation.CreateNew, BoardController.CreateNew)
module.exports = BoardRouter