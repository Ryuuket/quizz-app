<script lang="ts">
    import { getAnswers, getQuestions, getAnswerIsCorrect } from '../../lib/functions/getData';
    import { keepSelectedElements } from '../../lib/functions/keepData';
    import Button from './Button.svelte';
    import { onMount } from 'svelte';
  
    let questionsList: any[] = [];
    let answersList: any[] = [];
    let myData = $keepSelectedElements;

    let count: number = 0;
  
    const increment = () => {
        count += 1
    }
  
    onMount(async () => {
        questionsList = await getQuestions();
        answersList = await getAnswers();
        const correctAnswer = await getAnswerIsCorrect(count + 1);
        console.log(correctAnswer);
    });

    const validateAnswer = () => {
        console.log(myData);

        let answerByUser = myData[0].selectByUser;
        console.log(answerByUser);
/*
        const correctAnswer = await getAnswerIsCorrect();

        if (answerByUser !== correctAnswer) {
            console.log("mauvaise réponse");
        } else {
            console.log("bonne réponse");
        }*/
    }   
</script>

<div id="bloc">
    <div id="input">
        {#each questionsList.filter(question => question.questionId === count + 1) as question (question.questionId)}
        <h1>{question.questionContent}</h1>
        {/each}
        {#each answersList.filter(answer => answer.questionIdAssociated === count + 1) as answer (answer.answerId)}
            <Button buttonText="{answer.answerContent}" />
        {/each}

        <button on:click={() => validateAnswer()}>Valider</button>
        <button on:click={increment}>Question suivante</button>
    </div>
</div>

<style>
    :global(body) { /* Style global pour toute la page */
        background-color: rgb(19, 87, 36); /* Fond vert pour toute la page */
        color: white; /* Texte en blanc pour le contraste */
        font-family: Arial, sans-serif; /* Police de caractère */
    }

    #bloc { /* Style de la page */
        display: flex;  /* Pour aligner les éléments horizontalement */
        justify-content: center; /* Pour centrer les éléments */
        align-items: center; /* Pour centrer les éléments */
        height: 100vh; /* Pour prendre toute la hauteur de la page */
    }

    #input { /* Style de la zone de saisie */
        display: flex; /* Pour aligner les boutons horizontalement */
        flex-direction: column; /* Pour aligner les boutons verticalement */
        width: 400px; /* Largeur de la zone de saisie */
        background-color: #06300c;  /* Couleur de fond */
        justify-content: center; /* Pour centrer les boutons */
        border-radius: 10px; /* Pour arrondir les bords */
        transition: 1s; /* Pour ajouter une transition */
        padding: 10px; /* Pour ajouter un peu d'espace entre les bords et les boutons */
        overflow: hidden; /* Pour cacher les éléments qui dépassent */
    }
</style>
  