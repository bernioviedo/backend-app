import { Repository } from "../shared/repository.js"
import { Employee } from "./employeeEntity.js"

const employees = [
    new Employee(
        'Ezequiel Lombardo',
        '20-35621485-4',
        36,
        5,
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
]

export class EmployeeRepository implements Repository<Employee>{
    public async findAll(): Promise<Employee[] | undefined> {
        return await employees
    }
    public async findOne(i: { id: string; }): Promise<Employee | undefined> {
        return await employees.find((employee) => employee.employeId === i.id)
    }
    public async add(i: Employee): Promise<Employee | undefined> {
        await employees.push(i)
        return i
    }
    public async update(i: Employee): Promise<Employee | undefined> {
        const employeeIdx = await employees.findIndex((employee) => employee.employeId === i.employeId)

        if (employeeIdx !== -1){
            employees[employeeIdx] = { ...employees[employeeIdx], ...i }
        }
        return employees[employeeIdx]
    }
    public async delete(i: { id: string; }): Promise<Employee | undefined> {
        const employeeIdx = await employees.findIndex((employee) => employee.employeId === i.id)

        if (employeeIdx !== -1){
            const deletedEmployees = employees[employeeIdx]
            employees.splice(employeeIdx, 1)
            return deletedEmployees
        }
    }
}