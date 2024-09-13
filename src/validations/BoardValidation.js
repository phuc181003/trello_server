import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/apiErr'


const CreateNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().messages({
      'any.required': 'title is required',
      'string.empty': 'title is not allowed to be empty',
      'string.min': 'title min 3 chars',
      'string.max': 'title max 50 chars',
      'string.trim': 'title must not have leading or trailing whitespace'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })
  try {
    // console.log('req.body:', req.body)
    // chỉ định abortEarly: false dùng để đưa ra toàn bộ lỗi validation
    // nếu không có abortEarly: false sẽ đưa ra lần lượt từng lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
    next(customError)
  }
}
export const Boardvalidation = {
  CreateNew
}