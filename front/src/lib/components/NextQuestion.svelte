<script lang="ts">
    import { keepCount } from "$lib/functions/keepCount";

    let count: number = 0;

    const increment = () => {
        count += 1;

        const currentData = $keepCount;

        const newElement = {
        id: currentData.length + 1,
        count
        };

        keepCount.update(data => [...data, newElement]);

        console.log(keepCount);
        console.log(newElement);
    }
</script>

<button on:click={increment}>Question suivante</button>