import { z } from 'zod';
const employeeSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    cuil: z.string({ required_error: "CUIL is required", }),
    age: z.number().int().positive().gte(18),
    ancient: z.number().int().positive(),
});
export function validateEmployee(input) {
    return employeeSchema.safeParse(input);
}
export function validatePartialEmployee(input) {
    return employeeSchema.partial().safeParse(input);
}
//# sourceMappingURL=employeeSchema.js.map