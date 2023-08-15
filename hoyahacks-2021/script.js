treeQuestions = [
  "Approximately how much oxygen does a single tree provide in a year? \nA) 260 pounds \nB) 1 ton \nC) 70 pounds \nD) 15 pounds",
  "The tallest tree in the US is a Coast Redwood in California. How tall is it? \nA) 257 feet \nB) 300 feet \nC) over 369 feet \nD) over 500 feet",
  "A mature tree removes how many more times the pollution than a newly planted tree? \nA) 5 times \nB) 70 times \nC) 30 times \nD) 100 times",
];
treeAnswers = ["A", "C", "B"];

waterQuestions = [];
waterAnswers = [];

function trivia(page, questions, answers) {
  //alert(page.concat(" trivia!"));
  for (i = 0; i < 3; i++) {
    var userAns = prompt(questions[i]);
    userAns = userAns.toUpperCase();
    if (userAns == answers[i]) {
      alert("Correct!");
    } else {
      alert("Sorry, the answer was".concat(" ", answers[i]));
    }
  }
}
