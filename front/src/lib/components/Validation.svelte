<script lang="ts">
	import { keepCount } from '$lib/functions/keepCount';
    import { getAnswerIsCorrect } from '../../lib/functions/getData';
    import { keepSelectedElements } from '../functions/keepSelectedElements';

    let myData = keepSelectedElements;
    let answerIsCorrect: string;
    let myDataCount = keepCount;
    let count: number;
    // récupérer le count via myDataCount

    let blocAnswer: HTMLDivElement;
    let blocValidate: HTMLDivElement;
/*
    keepCount.subscribe(value => {
        $myDataCount = value;
        count = $myDataCount[$myDataCount.length - 1].count;
        console.log("test", count);
    });*/

    const validateAnswer = async () => {
        answerIsCorrect = await getAnswerIsCorrect(1);
        console.log(answerIsCorrect);

        blocAnswer.style.display = 'flex';
        blocValidate.style.display = 'none';
    }
</script>

<style>
    #bloc-answer {
        display: none;
        flex-direction: column;
    }

    #bloc-validate {
        display: flex;
        flex-direction: column;
    }
</style>

<div id="bloc-validate" bind:this={blocValidate}>
    <button on:click={validateAnswer}>Valider</button>
</div>
<div id="bloc-answer" bind:this={blocAnswer}>
    {#each $myData as item (item.id)}
        {#if (item.selectByUser === answerIsCorrect)}
            <div>{item.selectByUser}</div><p> est la bonne réponse</p>
        {:else}
            <div>{item.selectByUser}</div><p> n'est pas la bonne réponse</p>
        {/if}
    {/each}
</div>
