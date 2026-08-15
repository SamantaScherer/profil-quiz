let score = 0;
let currentQuestionIndex = 0;

let questions = [
    {
        question: "Seit wann lerne ich Programmieren?",
        answers: ["2025", "2026", "1999", "2024"],
        correctAnswer: 1
    },
    {
        question: "Welche Programmiersprachen bzw. Webtechnologien habe ich bisher gelernt?",
        answers: [
            "HTML, CSS und JavaScript",
            "Java, C++ und Python",
            "PHP, SQL und Java",
            "C, C#, C++"
        ],
        correctAnswer: 0
    },
    {
        question: "Welche Technologie wurde für die Gestaltung dieser Seite verwendet?",
        answers: [
            "Bootstrap",
            "Tailwind CSS",
            "Eine selbst geschriebene CSS-Datei",
            "Inline-CSS"
        ],
        correctAnswer: 2
    },
    {
        question: "Welchen Abschluss habe ich vorher abgeschlossen?",
        answers: [
            "Keinen",
            "Fachinformatiker",
            "Bachelor of Arts",
            "Bachelor of Fine Arts"
        ],
        correctAnswer: 2
    },
    {
        question: "Ohne was kann niemand programmieren?",
        answers: [
            "Computer",
            "Google",
            "Kaffee",
            "Gehirn"
        ],
        correctAnswer: "all"
    },
];


function displayQuestion() {

    if (currentQuestionIndex >= questions.length) {

        document.getElementById("quiz-container").hidden = true;
        document.getElementById("result").hidden = false;
        document.getElementById("score").textContent = score;

        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {

        let answerButton = document.createElement("button");

        answerButton.classList.add("answer-button");

        answerButton.textContent = answer;

        answerButton.onclick = () => checkAnswer(index);

        answersDiv.appendChild(answerButton);
    });
}


displayQuestion();


function checkAnswer(userAnswer) {

    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (correctAnswer === "all" ||userAnswer === correctAnswer) {
        score++;
    }

    nextQuestion();
}


function nextQuestion() {

    currentQuestionIndex += 1;

    displayQuestion();
}

function restartQuiz() {

    score = 0;
    currentQuestionIndex = 0;

    document.getElementById("result").hidden = true;
    document.getElementById("quiz-container").hidden = false;

    displayQuestion();
}