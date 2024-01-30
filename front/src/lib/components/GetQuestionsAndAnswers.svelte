<script lang="ts">
    import { getAnswers, getQuestionById } from '../../lib/functions/getData';
    import { onMount } from 'svelte';

    let answersList: any[] = [];
    let myQuestion: any;

    let count: number = 0
    /*const increment = () => {
        count += 1
    }*/

    onMount(async () => {
        myQuestion = await getQuestionById(count);
        console.log(count);
        answersList = await getAnswers();
    });
</script>

<style>
    button {
        display: flex;
    }
</style>

<div>
    <button>test</button>
    <h1>{myQuestion}</h1>
    {#each answersList.filter(answer => answer.questionIdAssociated === count + 1) as answer (answer.answerId)}
        <p>{answer.answerContent}</p>
    {/each}
    <button>test</button>
    <p>test</p>
</div>