<!-- Svelte script pour la navigation -->
<script lang="ts">
    import Head3d from "../lib/components/ui/typo/heading/Head3d.svelte";
  </script>
  
  <div class="app-container"> <!-- Conteneur de l'application -->
    <div class="background"></div> <!-- Image de fond -->
  
    <div id="question"> <!-- Titre de l'application -->
      <Head3d>Questions pour un développeur</Head3d>
    </div>
  
    <div>
      <a class="buttonStart" href="/game"
        ><span>start</span></a
      >
      <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>
  
    <div>
      <a class="buttonSignin" href="/create_question"
        ><span>signin</span></a
      >
      <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>
  
    <div>
      <button class="buttonSignup"
        >><span>signup</span></button
      >
      <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>
  </div>
  
  <!-- Styles CSS pour les éléments HTML -->
  <style>
    #question {
      text-align: center; /* Alignement du texte au centre */
      width: 400px; /* Largeur */
      height: 200px; /* Hauteur */
      margin: 0; /* Marge */
      padding: 0; /* Remplissage */
      transform: translateY(100px); /* Positionnement du titre */
    }
  
    .app-container {
      display: flex; /* Affichage en ligne */
      flex-direction: column; /* Direction de la ligne */
      align-items: center; /* Centrage vertical */
      min-height: 100vh; /* Hauteur de l'élément */
      min-width: 100vw; /* Largeur de l'élément */
    }
  
    .background {
      position: fixed; /* Positionnement fixe */
      top: 0; /* Positionnement en haut */
      right: 0; /* Positionnement à droite */
      left: 0; /* Positionnement à gauche */
      bottom: 0; /* Positionnement en bas */
      z-index: -1; /* Positionnement en arrière-plan */
  
      background-color: #356835; /* Ajout d'un fond vert */
      background-image: url("../lib/homepage.jpg"); /* Image de fond */
      background-position: center; /* Positionnement de l'image */
      background-size: absolute; /* Taille de l'image de fond */
      background-repeat: no-repeat; /* Pas de répétition de l'image */
    }
  
    .buttonStart > span {
      display: none;
    }
  
    .buttonStart {
      background-image: url("../lib/start.png"); /* Image de fond */
      background-color: transparent; /* Couleur de fond transparente */
      width: 250px; /* Largeur */
      height: 100px; /* Hauteur */
      background-size: cover; /* Taille de l'image de fond */
      border: none; /* Pas de bordure */
      cursor: pointer; /* Curseur de souris */
      display: flex; /* Affichage en ligne */
      transform: translateX(0px) translateY(460px); /* Positionnement du bouton */
      justify-content: center; /* Centrage horizontal */
      align-items: center; /* Centrage vertical */
    }
    .buttonStart:hover {
      transform: translateX(0px) translateY(460px) scale(1.2); /* Positionnement du bouton */
    }
  
    .buttonSignin > span { 
      display: none;
    }
  
    .buttonSignin {
      background-image: url("../lib/signin.png"); /* Image de fond */
      background-color: transparent; /* Couleur de fond transparente */
      width: 250px; /* Largeur */
      height: 100px; /* Hauteur */
      background-size: cover; /* Taille de l'image de fond */
      border: none; /* Pas de bordure */
      cursor: pointer; /* Curseur de souris */
      display: flex; /* Affichage en ligne */
      transform: translateX(-200px) translateY(500px); /* Positionnement du bouton */
      justify-content: center; /* Centrage horizontal */
      align-items: center; /* Centrage vertical */
    }
    .buttonSignin:hover {
      transform: translateX(-200px) translateY(500px) scale(1.2); /* Positionnement du bouton */
    }
  
    .buttonSignup > span { 
      display: none; 
    }
  
    .buttonSignup {
      background-image: url("../lib/signup.png"); /* Image de fond */
      background-color: transparent; /* Couleur de fond transparente */
      width: 250px; /* Largeur */
      height: 100px; /* Hauteur */
      background-size: cover; /* Taille de l'image de fond */
      border: none; /* Pas de bordure */
      cursor: pointer; /* Curseur de souris */
      display: flex; /* Affichage en ligne */
      transform: translateX(200px) translateY(403px); /* Positionnement du bouton */
      justify-content: center; /* Centrage horizontal */
      align-items: center; /* Centrage vertical */
    }
    .buttonSignup:hover {
      transform: translateX(200px) translateY(403px) scale(1.2); /* Positionnement du bouton */
    }
  
  </style>
  