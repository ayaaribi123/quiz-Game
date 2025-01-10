import React from "react";
import './profil.css';
import image from "../assets/Ellipse 6.png";
import head from "../assets/Rectangle 278.png";
import line from "../assets/Rectangle 283.png";
import linee from "../assets/Rectangle 282.png";
import flag from "../assets/ant-design_flag-filled.png"
import clock from "../assets/Vectorqsdsqd.png"
import check from "../assets/akar-icons_circle-check-fill.png"
import dashboard from "../assets/ic_round-space-dashboard.png"
import support from "../assets/bx_bx-support.png"
import notificationn from "../assets/ci_notification.png"
import logout from "../assets/ri_logout-box-fill.png"
import little from "../assets/Rectangle 287.png"
import tall from "../assets/Rectangle 286.png"
import firstbadge from "../assets/Badge (1).png"
import secondtbadge from "../assets/Badge (2).png"
import thirdtbadge from "../assets/Badge.png"
import historie from "../assets/Rectangle 274.png"
import medical from "../assets/Rectangle 275.png"
import techno from "../assets/Rectangle 276.png"
import agricult from "../assets/Rectangle 277.png"
import { useNavigate } from "react-router-dom";

const Profil = () => {
		let navigate = useNavigate();
		const StartQ = () => {
			navigate("/Topic");
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
					<button type="submit" onClick={StartQ} >Start Quiz</button>
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
					<img src={head} alt="imag of profile"></img>
					<h5>Oluwatobi Olowu</h5>
					<p>Bonus booster 24lv</p>
					<div className="second-line">
						<img src={linee} alt="imag of profile"></img>
					</div>
					<div className="line">
						<img src={line} alt="imag of profile"></img>
					</div>
					<div className="flag">
						<h6>27</h6>
						<p>Quiz Passed</p>
						<input type="text, image" placeholder="" required />
						<img src={flag} alt="flag" />
					</div>
					<div className="clock">
						<h2>27min</h2>
						<p>Fastest Time</p>
						<input type="text, image" placeholder="" required />
						<img src={clock} alt="clock" />
					</div>
					<div className="check">
						<h2>200</h2>
						<p>Correct Answers</p>
						<input type="text, image" placeholder="" required />
						<img src={check} alt="check" />
					</div>
				</div>
				<div className="Category">
					<h1>Achievements</h1>
					<img src={tall} alt="taller line" />
					<div className="taller">
						<img src={little} alt="little line" />
					</div>
					<h2>Featured Category</h2>
					<text>View All</text>
				</div>
				<div className="Achievements">
					<input type="text" placeholder="" required />
					<div className="badgeone">
						<img src={firstbadge} alt="first badge" />
						<text>Winner</text>
					</div>
					<div className="badgetwo">
						<img src={secondtbadge} alt="second badge" />
						<text>Comeback</text>
					</div>
					<div className="badgethree">
						<img src={thirdtbadge} alt="third badge" />
						<text>Lucky</text>
					</div>
					<div className="view">
					<text>View All</text>
					</div>
				</div>
				<div className="photoone">
					<img src={historie} alt="history" />
					<text>History</text>
				</div>
				<div className="phototwo">
					<img src={medical} alt="medical" />
					<text>Medcine</text>
				</div>
				<div className="photothree">
					<img src={techno} alt="technologie" />
					<text>Technology</text>
				</div>
				<div className="photofor">
					<img src={agricult} alt="Agriculture" />
					<text>Agriculture</text>
				</div>
			</form>

		</div>
	)
}

export default Profil;