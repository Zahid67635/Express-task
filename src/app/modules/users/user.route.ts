import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router()

router.post('/', userControllers.createUser)
router.get('/', userControllers.getUsers)
router.get('/:userId', userControllers.getAUser)
router.delete('/:userId', userControllers.deleteAUser)
router.put('/:userId', userControllers.updateAUser)
router.put('/:userId/orders', userControllers.addOrder)
router.get('/:userId/orders', userControllers.getAUserOrders)

export const userRoutes = router