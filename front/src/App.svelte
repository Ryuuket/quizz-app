<!-- Svelte script pour la navigation -->
<script lang="ts">
  let url = "";
  const navigate = (path: string) => (url = path);  // Cette fonction modifie la variable 'url' en fonction du chemin passé
</script>

<!-- Structure HTML avec le fond et les boutons -->
<div class="background">  <!-- Div pour le fond de la page -->

    <!-- Bouton START -->
    <div>
      <button class="button1" on:click={() => navigate("/start")}>START</button>  <!-- Bouton START qui appelle la fonction navigate avec le chemin "/start" -->
    </div>

    <!-- Bouton Login -->
    <div>
      <button class="button2" on:click={() => navigate("/login")}>Login</button>  <!-- Bouton Login qui appelle la fonction navigate avec le chemin "/login" -->
    </div>

    <!-- Bouton Sign In -->
    <div>
      <button class="button3" on:click={() => navigate("/signin")}>Sign In</button>  <!-- Bouton Sign In qui appelle la fonction navigate avec le chemin "/signin" -->
    </div>
</div>

<!-- Styles CSS pour les éléments HTML -->
<style>
  .background {
    /* Style pour le fond de la page */
    position: absolute;  /* Positionnement absolu */
    top: 0;  /* Haut de la page */
    left: 0;  /* Gauche de la page */
    width: 100%;  /* Largeur totale */
    height: 100%;  /* Hauteur totale */
    background-image: url("./lib/homepage.jpg");  /* Image de fond */
    background-size: 100% 100%;  /* Taille de l'image de fond */
    background-position: center;  /* Positionnement de l'image de fond */
  }

  .button1 {
    /* Style commun pour tous les boutons */
    display: inline-block;  /* Affichage en bloc inline */
    text-align: center;  /* Alignement du texte au centre */
    vertical-align: middle;  /* Alignement vertical au milieu */
    padding: 0.9% 7%;  /* Remplissage autour du texte */
    border: 7px solid #2c87bb;  /* Bordure solide */
    border-radius: 9px;  /* Rayon de la bordure arrondie */
    background: #4f24de;  /* Couleur de fond */
    font: normal normal bold 26px arial;  /* Style de police */
    color: #ffffff;  /* Couleur de police */
    text-decoration: none;  /* Pas de décoration du texte */
    text-transform: uppercase;  /* Transformation du texte en majuscules */
    transform: translateX(-10px) translateY(761px);
  }
  .button2 {
    /* Style commun pour tous les boutons */
    display: inline-block;  /* Affichage en bloc inline */
    text-align: center;  /* Alignement du texte au centre */
    vertical-align: middle;  /* Alignement vertical au milieu */
    padding: 0.1px 5%;  /* Remplissage autour du texte */
    border: 7px solid #2c87bb;  /* Bordure solide */
    border-radius: 9px;  /* Rayon de la bordure arrondie */
    background: #482aad;  /* Couleur de fond */
    font: normal normal bold 26px arial;  /* Style de police */
    color: #ffffff;  /* Couleur de police */
    text-decoration: none;  /* Pas de décoration du texte */
    text-transform: uppercase;  /* Transformation du texte en majuscules */
    transform: translateX(-223px) translateY(821px);
    }

  .button3 {
        /* Style commun pour tous les boutons */
        display: inline-block;  /* Affichage en bloc inline */
    text-align: center;  /* Alignement du texte au centre */
    vertical-align: middle;  /* Alignement vertical au milieu */
    padding: 0.1px 5%;  /* Remplissage autour du texte */
    border: 7px solid #2c87bb;  /* Bordure solide */
    border-radius: 9px;  /* Rayon de la bordure arrondie */
    background: #4f24de;  /* Couleur de fond */
    font: normal normal bold 26px arial;  /* Style de police */
    color: #ffffff;  /* Couleur de police */
    text-decoration: none;  /* Pas de décoration du texte */
    text-transform: uppercase;  /* Transformation du texte en majuscules */
    transform: translateX(225px) translateY(776px);
  }
  
</style>
