
//Game Rules:
//A quiz game with multiple choice.
//The player will have a limited amount of time to finish the quiz. 
//The game ends when the time runs out. 
//The next question will reveal when player will click a button.
//Quiz status will pop up at the end of quiz.
//Player will click any one on radio button for answer.
//Player is not allowed to pick no more than one answer per question.
// A countdown timer will start when start button is clicked.

$(document).ready(function() {
	$("#start").on("click", run);
});

	
	var time = 15;
	var intervalId;
	//$("#start").on("click", run);

	function run() {
		intervalId = setInterval(decrement, 1000);
		renderQuestion();
	};

	function decrement() {
		time--;
		$("#timeRemaining").html("<h2>" + time + "</h2>")

		if ( time === 0) {
			clearInterval(intervalId);
			$("#timeRemaining").append("Time Up!")
		}
	}
	//variables for rendering question.

	var questions;
	//var start = false;
	//questions refer to questions array which contains another array inside it 
	//that contains question, 4 choices and correct answer.
	var position = 0;//array index for main array.
	var question;//first element of inner array.
	var choice;//to find one choice among 4 choices.
	var choices;//to determine the number of choices.

	//For this game, 4 choices has been set as multiple choice.
	var choice1;
	var choice2;
	var choice3;
	var choice4;

	var correctAnswer = 0;//last element of inside array which is the correct answer.

	//function to render the questions one after another
	//questions array kept separated at the end of all functions.
	
	function renderQuestion() {
	//when all the questions is checked, quiz status will appear on the screen and
	//message will be populating in div with id test_status of html page.
		if (position >= questions.length || time === 0){
			$("#test_status").html("<h3>You got " + correctAnswer + " of " + questions.length + " questions correct</h3>"
			+ "<h2>Test completed</h2>");
			$(".nextQuestion").hide();

		//to stop execution further
			//quizOver();
		//position = 0;
		//correctAnswer = 0;
		return false;
		} 


		$("#questionNumber").html("Question " + (position + 1) + " of " + questions.length);
	//[position] refers to array index of multi dimensional array and [0] refers to first element of inner array.
	//To capture an element of multi dimentional array, uses the following variables:
		question = questions[position][0];
		choice1  = questions[position][1];
		choice2  = questions[position][2];
		choice3  = questions[position][3];
		choice4  = questions[position][4];
	//populating in div with id test of html page with the following elements:
		$("#test").html("<h3>" + question + "</h3>" + "<br>"
			+ "<input type='radio' name='choices' value='1'>" + choice1 + "<br>"
			+ "<input type='radio' name='choices' value='2'>" + choice2 + "<br>"
			+ "<input type='radio' name='choices' value='3'>" + choice3 + "<br>"
			+ "<input type='radio' name='choices' value='4'>" + choice4 + "<br>"
			+ "<button class= 'nextQuestion' onclick='checkAnswer()'>Next Question</button>"
			);
	}


	function checkAnswer() {
		var choices = $("input");
		for (var i = 0; i < choices.length; i++) {
			if (choices[i].checked) {
				choice = choices[i].value;
			}

		}
			if (choice === questions[position][5]) {
			correctAnswer++;
			}
		position++;
		renderQuestion();
	}
/*
	function quizOver() {
		if (time === 0) {
			position = 0;
			correctAnswer = 0;
			return false;
		$(".nextQuestion").unbind('click');
		$(".nextQuestion").text("Click for result")
		}
	}
*/
//window.addEventListener("load",run, false);
	
	var questions = [
			[   "To avoid a collision, a driver must maintain at least ------ following distance for each 10 mph of speed?","one car length", "two car length", "three car length", "four car length", "1"], 
			[	"When driving at night in a heavy fog, driver must use?", "high-beam headlights.", "flashing lights.", "low-beam headlights.", "parking lights.", "3"], 
			[   "No-Zone refers to?", "speed zones on highways.", "work zones on freeways.", "blind spots around trucks.", "free parking zones.", "3"], 
			[   "When making a left turn at a controlled intersection, driver must yield to?", "vehicles on the right.", "traffic behind.", "vehicles turning right.", "oncoming traffic.", "4"],
			[	"Alcohol causes?", "poor judgment", "slower judgment", "loss of concentration", "all of the these", ""]
			];
