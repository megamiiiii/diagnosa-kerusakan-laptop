function nextQuestion(current, answer) {
    document.getElementById(`q${current}`).classList.add("hidden");

    if (answer === 'yes') {
        document.getElementById(`q${current + 1}_yes`).classList.remove("hidden");
    } else {
        document.getElementById(`q${current + 1}_no`).classList.remove("hidden");
    }
}

function showResult(message) {
    document.getElementById("questions").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("diagnosis").innerText = message;
}

function restart() {
    document.getElementById("questions").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    let questions = document.querySelectorAll(".question");
    questions.forEach(q => q.classList.add("hidden"));

    document.getElementById("q1").classList.remove("hidden");
}
