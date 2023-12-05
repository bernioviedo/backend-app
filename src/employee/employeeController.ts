import { Employee } from "./employeeEntity.js"
import { EmployeeRepository } from "./employeeRepository.js"
import {Request, Response, NextFunction} from 'express'
import { validateEmployee, validatePartialEmployee } from "../schemas/employeeSchema.js"

const employeeRepo = new EmployeeRepository()

function sanitizeEmployeeInput(req:Request, res:Response, next:NextFunction){
    req.body.sanitizedInput = {
        name: req.body.name,
        cuil: req.body.cuil,
        age: req.body.age,
        ancient: req.body.ancient
    }

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
        }
    })
    next()
}

async function findAll(req:Request, res:Response){
    res.json({ data: await employeeRepo.findAll() })
}

async function findOne(req:Request, res:Response){
    const id = req.params.id

    const employee = await employeeRepo.findOne({ id })

    if(!employee){
        return res.status(404).send({ message: 'Employee not found'})
    }
    res.json({ data: employee })
}

async function add(req:Request, res:Response){
    const result = validateEmployee(req.body)

    if(!result.success){
        return res.status(422).json({ error:JSON.parse(result.error.message)})
    }
    const newEmployee = await employeeRepo.add({ ...result.data })
    return res.status(201).json({ data: newEmployee })
}

async function update(req:Request, res:Response){
    req.body.validatePartialEmployee.employeId = req.params.id
    const employee = await employeeRepo.update(req.body.validateEmployee)

    if(!employee){
        return res.status(404).send({ message: 'Employee not found'})
    }
    return res.status(200).send({ message:'Employee succefully updated', data: employee})
}

async function remove(req:Request, res:Response){
    const id = req.params.id

    const employee = await employeeRepo.delete({ id })

    if(!employee){
        return res.status(404).send({ message: 'Employee not found'})
    }
    return res.status(200).send({ message: 'Employee succefully deleted'})
}

export { sanitizeEmployeeInput, findAll, findOne, add, update, remove}