import express from 'express';
import { employeeRouter } from './employee/employeesRoutes.js';
import { fieldRouter } from './field/fieldRoutes.js';
import { grillRouter } from './grill/grillRoutes.js';
import { receiptRouter } from './receipt/receiptsRoutes.js';
import { userRouter } from './user/userRoutes.js';
import Cors from 'cors';
const app = express();
const cors = Cors();
app.use(express.json());
app.use(cors);
app.use('/api/employees', employeeRouter);
app.use('/api/fields', fieldRouter);
app.use('/api/grills', grillRouter);
app.use('/api/receipts', receiptRouter);
app.use('/api/users', userRouter);
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
app.options;
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
//# sourceMappingURL=app.js.map