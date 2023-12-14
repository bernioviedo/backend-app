import { z } from 'zod'

const userSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    lastName: z.string({
        required_error: "Last name is required",
        invalid_type_error: "Last name  must be a string"
    }),
    email: z.string({
        required_error: "email is required",
        invalid_type_error: "email must be a string"
    }).includes('@', {message:"At must be included"}).includes('.com', {message:".com must be included"}),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string"
    }),
})

export function validateUser(input :any){
    return userSchema.safeParse(input)
}

export function validatePartialUser(input: any){
    return userSchema.partial().safeParse(input)
}