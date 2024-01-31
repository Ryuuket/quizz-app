<script lang="ts">
    import { getAnswerIsCorrect } from '../../lib/functions/getData';
    import { keepSelectedElements } from '../functions/keepSelectedElements';
    import { onMount } from 'svelte';

    let myData = $keepSelectedElements;

    console.log(myData);
 
    onMount(async () => {
        const correctAnswer = await getAnswerIsCorrect(1);
        console.log(correctAnswer);
    });

    const validateAnswer = () => {
        console.log(myData);

        if (myData.length > 0) {
            let answerByUser = myData[myData.length - 1].selectByUser;
            console.log(answerByUser);
        } else {
            console.log('Aucune réponse sélectionnée');
        }
    }
</script>

<button on:click={validateAnswer}>Valider</button>
