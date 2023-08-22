import User from '../models/User.js';
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
	return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'})
}

export const getUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({message: error.message})
	}
}

// login user
export const loginUser = async (req, res) => {

	const { email, password } = req.body

	try {
		const user = await User.login(email, password)

		// Create token
		const token = createToken(user._id)

		res.status(200).json({email, token})

	} catch (error) {

		res.status(400).json({error: error.message})

	}
}


// Signup user
export const signupUser = async (req, res) => {

	const { email, password } = req.body

	try {
		const user = await User.signup(email, password)

		// Create token
		const token = createToken(user._id)

		res.status(200).json({email, token})
	} catch (error) {
		res.status(400).json({error: error.message})
	}

}