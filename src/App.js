
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profil from "./components/profil/profil/profil";
import Topic from "./components/topic/topic/topic";
import Quiz from "./components/Quiz/Quiz/Quiz";
import StarQuiz from "./components/start-Quiz/start-quiz/StarQuiz"
import SumbitQuiz from "./components/submit-Quiz/sumbit-quiz/SumbitQuiz"
import ResultQuiz from "./components/result-Quiz/result-quiz/ResultQuiz"
import CorrectionQuiz from "./components/correction-Quiz/correction-quiz/CorrectionQuiz"
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/profil" element={<Profil />} />
				<Route path="/topic" element={<Topic />} />
				<Route path="/Quiz" element={<Quiz />} />
				<Route path="/StarQuiz" element={<StarQuiz />} />
				<Route path="/SumbitQuiz" element={<SumbitQuiz />} />
				<Route path="/ResultQuiz" element={<ResultQuiz />} />
				<Route path="/CorrectionQuiz" element={<CorrectionQuiz />} />

			</Routes>
		</Router>
	);
}

export default App;
