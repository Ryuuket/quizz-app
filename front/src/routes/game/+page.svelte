<script lang="ts">
  // Votre code TypeScript ici
</script>

<body>
  <h1>" QUESTION "</h1>
  <main>
    <!-- Reste de votre code -->
  </main>
</body>

<style>

h1 {
  text-align: center; /* Centrer le texte */
  color: white; /* Couleur du texte */
  font-family: Arial, sans-serif; /* Police de caractère */
  font-size: 50px; /* Augmenter la taille de la police */
  margin: 80px 0; /* Marge autour du titre */
  padding: 10px; /* Espace entre le texte et le bord du cadre */
  background-color: #06300c; /* Couleur de fond du cadre */
  border: 4px solid white; /* Bordure blanche */
  border-radius: 10px; /* Bords arrondis du cadre */
  width: max-content; /* Largeur en fonction du contenu */
  margin-left: auto; /* Centrer le cadre horizontalement */
  margin-right: auto; /* Centrer le cadre horizontalement */
}

  :global(body) { /* Style global pour toute la page */
    background-color: rgb(19, 87, 36); /* Fond vert pour toute la page */
    color: white; /* Texte en blanc pour le contraste */
    font-family: Arial, sans-serif; /* Police de caractère */
  }

  main { /* Style de la page */
    display: flex;  /* Pour aligner les éléments horizontalement */
    justify-content: center; /* Pour centrer les éléments */
    align-items: center; /* Pour centrer les éléments */
    height: 25vh; /* Pour prendre toute la hauteur de la page */
  }

  .input { /* Style de la zone de saisie */
    display: flex; /* Pour aligner les boutons horizontalement */
    flex-direction: column; /* Pour aligner les boutons verticalement */
    width: 200px; /* Largeur de la zone de saisie */
    background-color: #06300c;  /* Couleur de fond */
    justify-content: center; /* Pour centrer les boutons */
    border-radius: 10px; /* Pour arrondir les bords */
    transition: 1s; /* Pour ajouter une transition */
    padding: 30px; /* Pour ajouter un peu d'espace entre les bords et les boutons */
    overflow: hidden; /* Pour cacher les éléments qui dépassent */
    margin-top: 5px; /* Ajoute une marge en haut */
}

  .value { /* Style des boutons */
    font-size: 40px; /* Taille du texte */
    background-color: transparent; /* Fond transparent */
    border: none; /* Suppression du style par défaut */
    padding: 10px; /* Pour ajouter un peu d'espace entre le texte et les bords */
    color: white; /* Texte en blanc pour le contraste */
    display: flex; /* Pour aligner le texte et l'icône horizontalement */
    position: relative; /* Pour positionner l'icône */
    gap: 20px; /* Pour ajouter un peu d'espace entre le texte et l'icône */
    cursor: pointer; /* Curseur de souris en forme de main */
    border-radius: 10px; /* Pour arrondir les bords */
    transition: 1s; /* Pour ajouter une transition */
    box-sizing: border-box; /* Pour que la taille du bouton ne change pas au survol */
    margin-bottom: 60px; /* Ajoute une marge en bas */
  }

  .value:not(:active):hover, /* Style au survol */
  .value:focus { /* Style au focus */
    display: flex; /* Pour afficher l'icône */
    box-sizing: border-box; /* Pour que la taille du bouton ne change pas au survol */
    border: 2px solid #1a1f24; 
    color: #637185; /* Texte en gris */
  }

  .value:focus, /* Style au focus */
  .value:active { /* Style au clic */
    background-color: #24241a; /* Fond vert */
    outline: none; /* Suppression du style par défaut */
    margin-left: 17px; /* Pour décaler le texte */
  }

  .value::before { /* Style de l'icône */
    content: ""; /* Pour afficher l'icône */
    position: absolute; /* Pour positionner l'icône */
    top: 5px; /* Pour centrer l'icône */
    left: -15px; /* Pour centrer l'icône */
    width: 5px; /* Pour centrer l'icône */
    height: 80%; /* Pour centrer l'icône */
    background-color: #dbe63e; /* Couleur de l'icône */
    border-radius: 5px; /* Pour arrondir les bords */
    opacity: 0; /* Pour cacher l'icône */
    transition: 1s; /* Pour ajouter une transition */
  }

  .value:focus::before, /* Style de l'icône au focus */
  .value:active::before { /* Style de l'icône au clic */
    opacity: 1; /* Pour afficher l'icône */
  }

  .value svg { /* Style de l'icône */
    width: 20px; /* Taille de l'icône */
  }

  .input:hover > :not(.value:hover) { /* Style des boutons au survol de la zone de saisie */
    transition: 300ms; /* Pour ajouter une transition */
    filter: blur(1.5px); /* Pour flouter les boutons */
    transform: scale(0.95, 0.95); /* Pour réduire la taille des boutons */
  }
</style>

<main>
  <div class="input">
    <button class="value">

      Réponse 1
    </button>
    <button class="value">

      Réponse 2
    </button>
    <button class="value">

      Réponse 3
    </button>
    <button class="value">

      Réponse 4
    </button>
  </div>
</main>
