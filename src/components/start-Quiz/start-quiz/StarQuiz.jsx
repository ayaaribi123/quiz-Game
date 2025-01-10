import React from "react";
import './startQuiz.css';
import image from "../assets/Ellipse 6.png";
import dashboard from "../assets/ic_round-space-dashboard.png"
import support from "../assets/bx_bx-support.png"
import notificationn from "../assets/ci_notification.png"
import logout from "../assets/ri_logout-box-fill.png"
import king from "../assets/Rectangle 274.png"
import { useNavigate } from "react-router-dom";


const Start = () => {
	let navigate = useNavigate();
	const SumbitQuiz = () => {
		navigate("/SumbitQuiz");
	}
	return (
		<div className="element">
			<form action="">
				<h1>Quiz Time</h1>
				<div className="click-Dashboard">
					<img src={dashboard} alt="dashboard" />
					<button type="submit">Dashboard</button>
				</div>
				<div className="click-Start-Quiz">
					<button type="submit" >Start Quiz</button>
				</div>
				<div className="Search">
					<input type="text" placeholder="Search" required />
				</div>
				<div className="support">
					<h2>Support</h2>
					<img src={support} alt="support" />
				</div>
				<div className="Notification">
					<h3>Notification</h3>
					<img src={notificationn} alt="notificationn" />
				</div>
				<div className="logout">
					<h4>Log Out</h4>
					<img src={logout} alt="logout" />
				</div>
				<div className="header-img" >
					<img src={image} alt="imag of profile"></img>
					<text>Oluwatobi..</text>
				</div>
				<div className="body">
					<input type="text, image" placeholder="" required />
				</div>
				<div className="History-Quiz">
					<h1>History Quiz</h1>
					<text>Answer the question below</text>
					<div className="histori">
						<img src={king} alt="history" />
						<h1>Timer: 29:09Mins</h1>
						<p>Question 1/5</p>
						<div className="first-line">
							<text>Guy Bailey, Roy Hackett and Paul Stephenson</text>
						</div>
						<div className="second-line">
							<text>	made history in 1963, as part of a protest against </text>
						</div>
						<div className="third-line">
							<text>a bus company that refused to employ black and </text>
						</div>
						<div className="fourth-line">
							<text>	Asian drivers in which UK city?</text>
						</div>
					</div>
				</div>
				<div className="answer">
					<h1>Choose answer</h1>
					<div className="check-london">
						<input type="checkbox" id="topping" name="topping" value="London" />London
					</div>
					<div className="check-edinburgh">
						<input type="checkbox" id="topping" name="topping" value="Edinburgh" />Edinburgh
					</div>
					<div className="check-liverpool">
						<input type="checkbox" id="topping" name="topping" value="Liverpool" />Liverpool
					</div>
					<div className="check-canary">
						<input type="checkbox" id="topping" name="topping" value="Canary Wharf" />Canary Wharf
					</div>
					<div className="click-start">
						<button type="submit" onClick={SumbitQuiz} >Next</button>
					</div>
				</div>
			</form>

		</div>
	)
}

export default Start;