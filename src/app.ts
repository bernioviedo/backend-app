import express from 'express'
import { employeeRouter } from './employee/employeesRoutes.js'
import { fieldRouter } from './field/fieldRoutes.js'
import { grillRouter } from './grill/grillRoutes.js'
import { receiptRouter } from './receipt/receiptsRoutes.js'

const app = express()
app.use(express.json())

app.use('/api/employees', employeeRouter)
app.use('/api/fields', fieldRouter)
app.use('/api/grills', grillRouter)
app.use('/api/receipts', receiptRouter)

app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' })
})

app.listen(8080, () =>{
    console.log('server listening on port 8080')
})