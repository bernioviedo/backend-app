import { Employee } from "./employeeEntity.js";
const employees = [
    new Employee('Ezequiel Lombardo', '20-35621485-4', 36, 5, 'a02b91bc-3769-4221-beb1-d7a3aeba7dad'),
];
export class EmployeeRepository {
    findAll() {
        return employees;
    }
    findOne(i) {
        return employees.find((employee) => employee.employeId === i.id);
    }
    add(i) {
        employees.push(i);
        return i;
    }
    update(i) {
        const employeeIdx = employees.findIndex((employee) => employee.employeId === i.employeId);
        if (employeeIdx !== -1) {
            employees[employeeIdx] = { ...employees[employeeIdx], ...i };
        }
        return employees[employeeIdx];
    }
    delete(i) {
        const employeeIdx = employees.findIndex((employee) => employee.employeId === i.id);
        if (employeeIdx !== -1) {
            const deletedEmployees = employees[employeeIdx];
            employees.splice(employeeIdx, 1);
            return deletedEmployees;
        }
    }
}
//# sourceMappingURL=employeeRepository.js.map