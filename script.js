// Quiz questions and correct answers
const quizData = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" }
    ];
    
    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');
    
    quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    
    // Loop through each question
    quizData.forEach((quizItem, index) => {
    const selectedOption = document.querySelector(`input[name=q${index + 1}]:checked`);
    
    if (selectedOption) {
    if (selectedOption.value === quizItem.answer) {
    score++;
    }
    }
    });
    
    // Display results
    quizResults.innerHTML = `You scored ${score} out of ${quizData.length}.`;
    });