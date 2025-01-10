import React from "react";
import './Quiz.css';
import image from "../assets/Ellipse 6.png";
import dashboard from "../assets/ic_round-space-dashboard.png"
import support from "../assets/bx_bx-support.png"
import notificationn from "../assets/ci_notification.png"
import logout from "../assets/ri_logout-box-fill.png"
import historie from "../assets/Rectangle 274.png"
import { useNavigate } from "react-router-dom";

const Quiz = () => {
	let navigate = useNavigate();
				const Startquiz = () => {
					navigate("/StarQuiz");
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
					<text>Read the following instructions</text>
					<div className="histori">
						<img src={historie} alt="history" />
						<text>Instructions</text>
						<div className="paragraphe">
						<h10>This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to</h10>
						<h9> conversant with the topics. Keep the following in mind:</h9>
						</div>
						<div className="half-paragraphe">
						 <text> Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.</text>
							<h8>Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.</h8>
							<div className="end-paragraphe">
							<h7>To start, click the "Start" button. When finished, click the "Submit " button. </h7>
							</div>
							</div>
					</div>
					<div className="rules">
						<div className="rule1">
						<h1>Date: </h1>
						<h11>28/07/2021</h11>
						</div>
						<div className="rule2">
						<h2>Time Limit: </h2>
						<h12>30 Mins </h12>
						</div>
						<div className="rule3">
						<h3>Attempts:</h3>
						<h13>Once</h13>
						</div>
						<div className="rule4">
						<h4>Points:</h4>
						<h14>200 Points</h14>
						</div>
					</div>
					<div className="click-start">
					<button type="submit" onClick={Startquiz} >start</button>
				</div>
				</div>
			</form>

		</div>
	)
}

export default Quiz;