import { z } from 'zod';
const employeeSchema = z.object({
<<<<<<< HEAD
    name: z.string()
});
=======
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    cuil: z.string({ required_error: "CUIL is required", }),
    age: z.number().int().positive().gte(18),
    ancient: z.number().int().positive(),
});
function validateEmployee(object) {
    return employeeSchema.safeParse(object);
}
function validatePartialEmployee(object) {
    return employeeSchema.partial().safeParse(object);
}
export { validateEmployee, validatePartialEmployee };
>>>>>>> employee
//# sourceMappingURL=employeeSchema.js.map