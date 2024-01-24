<!-- Svelte script pour la navigation -->
<script lang="ts">
    let url = "";
    const navigate = (path: string) => (url = path);  // Cette fonction modifie la variable 'url' en fonction du chemin passé
</script>

