import React from "react";
import { useState, useEffect } from "react";


const api = () => {
	const [questions, setQuestions] = useState([]); // All quiz questions
	const [currentIndex, setCurrentIndex] = useState(0); // Which question is being shown
	const [score, setScore] = useState(0); // How many answers are correct
	const [selectedOption, setSelectedOption] = useState(null); // The user's answer (True or False)


	useEffect(() => {
		// This hook runs when the component mounts.
		fetch("https://opentdb.com/api.php?amount=5&category=23")
			.then((response) => response.json()) // Convert the response to JSON
			.then((data) => {
				const formattedQuestions = data.results.map((item) => ({
					question: item.question, // The question text
					correctAnswer: item.correct_answer === "True",
				}));
				setQuestions(formattedQuestions); // Save formatted questions to state
			})
			.catch((error) => console.error("Error fetching questions:", error));
	}, []); // Empty dependency array ensures this runs only once when the component mounts.

	const handleSubmit = () => {
		const currentQuestion = questions[currentIndex]; // Get the current question

		// Check if the selected answer is correct
		if (selectedOption === currentQuestion.correctAnswer) {
			setScore(score + 1); // Increase the score if correct
		}

		// Move to the next question
		setSelectedOption(null); // Reset the selected option
		setCurrentIndex(currentIndex + 1);
	};

	// If no questions have loaded, show a loading message
	if (questions.length === 0) return <p>Loading questions...</p>;

	// If all questions are answered, show the final score
	if (currentIndex >= questions.length) {
		return <p>Congratulations you have passed You scored : {score}</p>;
	}
	const currentQuestion = questions[currentIndex]; // Get the current question to display

	return (
		<div>
						<h1>True or False Quiz</h1>
						<p>Score: {score}</p>

						<h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} /> {/* Display the question */}

						<div>
								<button
										onClick={() => setSelectedOption(true)}
										style={{ backgroundColor: selectedOption === true ? "Correct Answer" : "" }}
								>
										True
								</button>

								<button
										onClick={() => setSelectedOption(false)}
										style={{ backgroundColor: selectedOption === false ? "Wrong Answer" : "" }}
								>
										False
								</button>
						</div>

						<button onClick={handleSubmit} disabled={selectedOption === null}>
								Submit
						</button>
				</div>
		);
};

export default api;
