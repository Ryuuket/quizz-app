<script> // front/src/lib/gamepage.svelte
    let score = 0; // Variable pour stocker le score
    let currentQuestion = { // Variable pour stocker la question courante
        question: "Quelle est la capitale de la France ?", 
        answers: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        correctAnswer: "Paris"
    };

    /**
   * @param {string} answer
   */
    function handleAnswer(answer) { // Fonction pour gérer la réponse
        if (answer === currentQuestion.correctAnswer) { // Si la réponse est correcte
            score += 1;
        } else {
            // Logique en cas de réponse incorrecte (facultatif)
        }
        // Logique pour passer à la question suivante (à implémenter)
    }
</script>

<style>
    .quiz-container {
        text-align: center;
        margin-top: 50px;
    }
    .score {
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .question {
        margin-bottom: 20px;
    }
    .answers button {
        margin: 5px;
    }
</style>

<div class="quiz-container">
    <div class="score">Score: {score}</div>
    <div class="question">{currentQuestion.question}</div>
    <div class="answers">
        {#each currentQuestion.answers as answer}
            <button on:click={() => handleAnswer(answer)}>{answer}</button>
        {/each}
    </div>
</div>
