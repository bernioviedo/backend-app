import { Router } from "express"
import { sanitizeEmployeeInput, findAll, findOne, add, update, remove } from "./employeeController.js"

export const employeeRouter = Router()

employeeRouter.get('/', findAll)
employeeRouter.post('/', sanitizeEmployeeInput, add)
employeeRouter.get('/:id', findOne)
employeeRouter.patch('/:id', sanitizeEmployeeInput, update)
employeeRouter.put('/:id', sanitizeEmployeeInput, update)
employeeRouter.delete('/:id', remove)