import crypto from 'node:crypto';
export class Employee {
    constructor(name, cuil, age, ancient, employeId = crypto.randomUUID()) {
        this.name = name;
        this.cuil = cuil;
        this.age = age;
        this.ancient = ancient;
        this.employeId = employeId;
    }
}
//# sourceMappingURL=employeeEntity.js.map