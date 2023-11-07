import { Router } from "express"
import { sanitizeGrillInput, findAll, findOne, add, update, remove } from "./grillController.js"

export const grillRouter = Router()

grillRouter.get('/', findAll)
grillRouter.post('/', sanitizeGrillInput, add)
grillRouter.get('/:id', findOne)
grillRouter.put('/:id', sanitizeGrillInput, update)
grillRouter.patch('/:id', sanitizeGrillInput, update)
grillRouter.delete('/:id', remove)