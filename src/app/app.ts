import express from 'express'
const app = express()
import cors from 'cors';
import { userRoutes } from './modules/users/user.route';


app.use(express.json());
app.use(cors());


app.use('/api/v1/users', userRoutes)

export default app;

