import React from "react";
import './topic.css';
import image from "../assets/Ellipse 6.png";
import dashboard from "../assets/ic_round-space-dashboard.png"
import support from "../assets/bx_bx-support.png"
import notificationn from "../assets/ci_notification.png"
import logout from "../assets/ri_logout-box-fill.png"
import historie from "../assets/Rectangle 274.png"
import medical from "../assets/Rectangle 275.png"
import historical from "../assets/Rectangle 274 - Copie.png"
import Technologie from "../assets/Rectangle 276.png"
import Agriculture from "../assets/Rectangle 277.png"
import { useNavigate } from "react-router-dom";

const Topic = () => {
	let navigate = useNavigate();
			const Goquiz = () => {
				navigate("/Quiz");
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
		<div className="body">
			<h1>Select Topic</h1>
			<text>Featured Category</text>
			<div className="histori">
				<img src={historie} alt="history" />
				<h2>History</h2>
			</div>
			<div className="medicin">
				<img src={medical} alt="medical" />
				<h3>Medcine</h3>
			</div>
			<div className="historii">
				<img src={historical} alt="historical" />
				<h4>History</h4>
			</div>
			<div className="medical">
				<img src={medical} alt="medicale" />
				<h1>Medcine</h1>
			</div>
			<div className="technologie">
				<img src={Technologie} alt="Technologie" />
				<h1>Technology</h1>
			</div>
			<div className="technology">
				<img src={Technologie} alt="Technologie" />
				<h1>Technology</h1>
			</div>
			<div className="technologiee">
				<img src={Technologie} alt="Technologie" />
				<h1>Technology</h1>
			</div>
			<div className="technologiie">
				<img src={Technologie} alt="Technologie" />
				<h1>Technology</h1>
			</div>
			<div className="Agriculture">
				<img src={Agriculture} alt="Agriculture" />
				<h1>Agriculture</h1>
			</div>
			<div className="Agriculturie">
				<img src={Agriculture} alt="Agriculture" />
				<h1>Agriculture</h1>
			</div>
			<div className="Agriculturee">
				<img src={Agriculture} alt="Agriculture" />
				<h1>Agriculture</h1>
			</div>
			<div className="Agriculturre">
				<img src={Agriculture} alt="Agriculture" />
				<h1>Agriculture</h1>
			</div>
		</div>
		<div className="click-more">
					<button type="submit" onClick={Goquiz}>more</button>
				</div>
		</form>
		</div>
	)
}

export default Topic;