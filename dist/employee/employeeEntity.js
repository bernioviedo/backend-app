import crypto from 'node:crypto';
export class Employee {
    constructor(name, cuil, age, ancient, employeId = crypto.randomUUID(), _id) {
        this.name = name;
        this.cuil = cuil;
        this.age = age;
        this.ancient = ancient;
        this.employeId = employeId;
        this._id = _id;
    }
}
//# sourceMappingURL=employeeEntity.js.map