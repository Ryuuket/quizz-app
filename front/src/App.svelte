<!-- Svelte script pour la navigation -->
<script lang="ts">
  let url = "";
  const navigate = (path: string) => (url = path);  // Cette fonction modifie la variable 'url' en fonction du chemin passé
</script>

<div class="background">  <!-- Div pour le fond de la page -->


    ><div>
      <button class="buttonStart" on:click={() => navigate("/start")}></button>  <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>

    ><div>
      <button class="buttonLogin" on:click={() => navigate("/starLogin")}></button>  <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>

    ><div>
      <button class="buttonSignin" on:click={() => navigate("/startSignin")}></button>  <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>

</div>

<!-- Styles CSS pour les éléments HTML -->
<style>
  .background {
    /* Style pour le fond de la page */
    position: absolute;  /* Positionnement absolu */
    top: 0;  /* Haut de la page */
    left: 0;  /* Gauche de la page */
    width: 60%;  /* Largeur totale */
    height: 100%;  /* Hauteur totale */
    background-image: url("./lib/homepage.jpg");  /* Image de fond */
    background-position: center;  /* Positionnement de l'image de fond */

  }

  .buttonStart {

    background-image: url("./lib/start.png"); /* Image de fond */
    background-color: transparent;  /* Couleur de fond transparente */
    width: 250px; /* Largeur */
    height: 100px; /* Hauteur */
    background-size: cover; /* Taille de l'image de fond */
    border: none; /* Pas de bordure */
    cursor: pointer; /* Curseur de souris */
    display: block;  /* Affichage en bloc */
    transform: translateX(400px) translateY(561px)
  }
    .buttonStart:hover {
    transform: translateX(400px) translateY(561px) scale(1.2) ; /* Positionnement du bouton */
  }
  .buttonLogin { 

    background-image: url("./lib/login.png");
    background-color: transparent;
    width: 250px;
    height: 100px;
    background-size: cover;
    border: none;
    cursor: pointer;
    display: block;
    transform: translateX(200px) translateY(561px);
  }
    .buttonLogin:hover {
      transform: translateX(200px) translateY(561px) scale(1.2); /* Positionnement du bouton */
  }
    .buttonSignin {

    background-image: url("./lib/signin.png");
    background-color: transparent;
    width: 250px; /* Adjust as needed */
    height: 100px; /* Adjust as needed */
    background-size: cover;
    border: none;
    cursor: pointer;
    display: block;
    transform: translateX(600px) translateY(448px);
  } 
  .buttonSignin:hover {
      transform: translateX(600px) translateY(448px) scale(1.2) ; /* Positionnement du bouton */
  }
  
</style>
