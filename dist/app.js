import express from 'express';
import { employeeRouter } from './employee/employeesRoutes.js';
import { fieldRouter } from './field/fieldRoutes.js';
import { grillRouter } from './grill/grillRoutes.js';
const app = express();
app.use(express.json());
app.use('/api/employees', employeeRouter);
app.use('/api/fields', fieldRouter);
app.use('/api/grills', grillRouter);
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
//# sourceMappingURL=app.js.map