import { z } from 'zod'

const employeeSchema = z.object({
    name: z.string()
})