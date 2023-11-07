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
    public findAll(): Employee[] | undefined {
        return employees
    }
    public findOne(i: { id: string; }): Employee | undefined {
        return employees.find((employee) => employee.employeId === i.id)
    }
    public add(i: Employee): Employee | undefined {
        employees.push(i)
        return i
    }
    public update(i: Employee): Employee | undefined {
        const employeeIdx = employees.findIndex((employee) => employee.employeId === i.employeId)

        if (employeeIdx !== -1){
            employees[employeeIdx] = { ...employees[employeeIdx], ...i }
        }
        return employees[employeeIdx]
    }
    public delete(i: { id: string; }): Employee | undefined {
        const employeeIdx = employees.findIndex((employee) => employee.employeId === i.id)

        if (employeeIdx !== -1){
            const deletedEmployees = employees[employeeIdx]
            employees.splice(employeeIdx, 1)
            return deletedEmployees
        }
    }
}