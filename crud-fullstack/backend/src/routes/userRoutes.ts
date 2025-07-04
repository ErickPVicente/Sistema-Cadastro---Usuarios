import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.getAllUsers);

export default router;