<script lang="ts">
    import { getAnswers, getQuestions } from '../../lib/functions/getData';
    import { onMount } from 'svelte';
	import Validation from './Validation.svelte';
	import NextQuestion from './NextQuestion.svelte';
    import Button from './Button.svelte';
  
    let questionsList: any[] = [];
    let answersList: any[] = [];
    let count = 0;
  
    onMount(async () => {
        questionsList = await getQuestions();
        answersList = await getAnswers();
    });
</script>

<div id="bloc">
    <div id="input">
        {#each questionsList.filter(question => question.questionId === count + 1) as question (question.questionId)}
        <h1>{question.questionContent}</h1>
        {/each}
        {#each answersList.filter(answer => answer.questionIdAssociated === count + 1) as answer (answer.answerId)}
            <Button buttonText="{answer.answerContent}" />
        {/each}
        <Validation />
        <NextQuestion />
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
  