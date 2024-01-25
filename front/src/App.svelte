<!-- Svelte script pour la navigation -->
<script lang="ts">
  import Head3d from "./lib/components/ui/typo/heading/Head3d.svelte";
  let url = "";
  const navigate = (path: string) => (url = path); // Cette fonction modifie la variable 'url' en fonction du chemin passé
</script>

<div class="app-container">
  <div class="background"></div>

  <div id="question">

    <Head3d>Questions pour un développeur</Head3d>

  </div>

  <div>
    <button class="buttonStart" on:click={() => navigate("/start")}>Start</button>
    <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
  </div>

  <div>
    <button class="buttonLogin" on:click={() => navigate("/starLogin")}
    >signin</button>
    <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
  </div>

  <div>
    <button class="buttonSignin" on:click={() => navigate("/startSignin")}
    >signup</button>
  </div>
</div>

<!-- Styles CSS pour les éléments HTML -->
<style>

#question {
  text-align: center;
  width: 400px;
  height: 200px;
  margin: 0;
  padding: 0;
}

  .app-container {
    display: flex; /* Affichage en ligne */
    flex-direction: column; /* Direction de la ligne */
    justify-content: center; /* Centrage horizontal */
    align-items: center; /* Centrage vertical */
    min-height: 100vh; /* Hauteur de l'élément */
    min-width: 100vw; /* Largeur de l'élément */
  }
  /*h1 {
    color: rgb(255, 136, 0);
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 2rem;
  }*/
  .background {
    position: fixed;
    top: 0;
    right: 0 ;
    left: 0;
    bottom: 0;
    z-index: -1;

    background-image: url("./lib/homepage.jpg"); /* Image de fond */
    background-position: center; 
    background-size: absolute; 
    background-repeat: no-repeat;
  }

</style>
