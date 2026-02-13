import express from 'express';
import { getUserProfile, updateUserProfile, changePassword, deleteAccount} from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';


const router = express.Router();

router.get('/profile', authenticate, getUserProfile);
// router.put('/profile', authenticate, updateUserProfile);

router.put(
  '/profile',
  authenticate,
  upload.single('profile_picture'),
  updateUserProfile
);

router.put('/change-password', authenticate, changePassword);
router.delete('/delete-account', authenticate, deleteAccount);

export default router;