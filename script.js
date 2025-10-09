const questions = [
    { q: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    { q: "Capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
    { q: "Which is a JS framework?", options: ["React", "Python", "C"], answer: "React" }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    questionEl.textContent = questions[index].q;
    optionsEl.innerHTML = "";
    questions[index].options.forEach(opt => {
        const li = document.createElement("li");
        li.textContent = opt;
        li.onclick = () => checkAnswer(opt);
        optionsEl.appendChild(li);
    });
}

function checkAnswer(selected) {
    if (selected === questions[index].answer) {
        score++;
    }
    index++;
    if (index < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.textContent = `Your Score: ${score}/${questions.length}`;
    }
}

nextBtn.onclick = () => {
    index++;
    if (index < questions.length) {
        loadQuestion();
    }
};

loadQuestion();
