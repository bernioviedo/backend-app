import { Router } from "express"
import { sanitizeUserInput, findAll, findOne, add, update, remove } from "./userController.js"

export const userRouter = Router()

userRouter.get('/', findAll)
userRouter.post('/', sanitizeUserInput, add)
userRouter.put('/:id', sanitizeUserInput, update)
userRouter.patch('/:id', sanitizeUserInput, update)
userRouter.get('/:id', findOne)
userRouter.delete('/:id', remove)