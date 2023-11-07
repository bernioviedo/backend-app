import { Router } from "express"
import { findAll, findOne, add, remove, update, sanitizeFieldInput } from "../field/fieldController.js"

export const fieldRouter = Router()

fieldRouter.get('/', findAll)
fieldRouter.post('/', sanitizeFieldInput, add)
fieldRouter.get('/:id', findOne)
fieldRouter.put('/:id', sanitizeFieldInput, update)
fieldRouter.patch('/:id', sanitizeFieldInput, update)
fieldRouter.delete('/:id', remove)