import express from 'express';

const {
	loginUser,
	signupUser
} = require('../controllers/user');

const router = express.Router();

router.post('/login', loginUser);

router.post('/signup', signupUser);

export default router;