<script lang="ts">
    import { getAnswers, getQuestions } from '../../lib/functions/getData';
    import { onMount } from 'svelte';
  
    let questionsList: any[] = [];
    let answersList: any[] = [];
    //let selectByUser: boolean;
  
    let count: number = 0
    const increment = () => {
        count += 1
    }
  
    /*const selectedElements = () => {
        selectByUser = element;
  
        if (selectByUser === true) {
  
        } else {
  
        }
    }*/
  
    onMount(async () => {
        questionsList = await getQuestions();
        answersList = await getAnswers();
    });
</script>

<style>
    button {
        display: flex;
    }
</style>

<div>
    {#each questionsList.filter(question => question.questionId === count + 1) as question (question.questionId)}
      <h1>{question.questionContent}</h1>
    {/each}
    {#each answersList.filter(answer => answer.questionIdAssociated === count + 1) as answer (answer.answerId)}
        <button>{answer.answerContent}</button>
    {/each}
    <button on:click={increment}>Question suivante</button>
</div>