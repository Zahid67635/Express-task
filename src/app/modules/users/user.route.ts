import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router()

router.post('/', userControllers.createUser)
router.get('/', userControllers.getUsers)
router.get('/:userId', userControllers.getAUser)

export const userRoutes = router