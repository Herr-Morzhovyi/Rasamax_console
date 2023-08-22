import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Box, useTheme, TextField, Button } from "@mui/material";

const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {login, error, isLoading} = useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await login(email, password)
	}

	return <Box m="1.5rem 2.5rem">
		<form className="login" onSubmit={handleSubmit}>
			<TextField 
			required
			id="login-email"
			label="Email"
			defaultValue="name@domain.com"
			variant="outlined"
			onChange={(e) => setEmail(e.target.value)}
			value={email}/>
			<TextField 
			required 
			id="login-password" 
			label="Password"
			variant="outlined" 
			type="password"/>
			<Button variant="contained" color="secondary" disbled={isLoading}>
				Login
  			</Button>
			{error && <div className="error">{error}</div>}
		</form>
	</Box>
}

export default Login;