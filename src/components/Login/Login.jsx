import React from "react";
import './Login.css';
import Paragraphe from "../assets/Group 26 (1).png";
import image from "../assets/Rectangle 433.png";
import { useNavigate } from "react-router-dom";
import gmail from"../assets/flat-color-icons_google.png";


const Login = () => {
	let navigate = useNavigate();
	const login = () => {
		navigate("/profil");
	}
	return (
		<div className="wrapper">
			<form action="">
				<h1>Login to your Account</h1>
				<text>with your registered Email Address</text>
				<div className="input-box1">
					<h1>Email address*</h1>
					<input type="text" placeholder="Enter email address" required />
				</div>
				<div className="input-box2">
					<h2>Enter password*</h2>
					<input type="Password" placeholder="Password" required />
				</div>
				<div className="remember-forgot">
					<label><input type="checkbox" />Remember my password</label>
				</div>
				<div className="click-login">
					<button type="submit" onClick={login}>Login</button>
				</div>
				<div className="another-choice">
					<h2>or</h2>
				</div>
				<div className="google-link">
					<button type="submit">Login with Google</button>
					<img src={gmail} alt="gmail" />
				</div>
				<div className="half-screen-2" >
					<img src={image} alt="half of background"></img>
				</div>
				<div className="half-text" >
				<img src={Paragraphe} alt="overly imag" ></img>
				</div>
			</form>
		</div>
	)
}

export default Login;