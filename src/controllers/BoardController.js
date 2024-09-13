import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/apiErr'


const CreateNew = async (req, res, next) => {
  try {
    console.log('req.body:', req.body)
    // res.status(StatusCodes.CREATED).json({
    //   message: 'POS from validation API Create Board'
    // })
    throw new ApiError(StatusCodes.BAD_GATEWAY, 'from validation API Create Board')
  } catch (error) {next(error)}
}

export const BoardController = {
  CreateNew
}