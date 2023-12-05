import { Router } from "express"
import { sanitizeEmployeeInput, findAll, findOne, add, update, remove } from "./employeeController.js"
import { validateEmployee, validatePartialEmployee } from "../schemas/employeeSchema.js"

export const employeeRouter = Router()

employeeRouter.get('/', findAll)
employeeRouter.post('/', validateEmployee, add)
employeeRouter.get('/:id', findOne)
employeeRouter.patch('/:id', validatePartialEmployee, update)
employeeRouter.put('/:id', validatePartialEmployee, update)
employeeRouter.delete('/:id', remove)