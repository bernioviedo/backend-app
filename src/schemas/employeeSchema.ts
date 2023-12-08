import { z } from 'zod'

const employeeSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    cuil: z.string({required_error: "CUIL is required",}),
    age: z.number().int().positive().gte(18),
    ancient: z.number().int().positive(),
})

function validateEmployee(object: any){
    return employeeSchema.safeParse(object)
}

function validatePartialEmployee(object: unknown){
    return employeeSchema.partial().safeParse(object)
}

export { validateEmployee, validatePartialEmployee }