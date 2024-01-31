<script>
    import { keepSelectedElements } from "$lib/functions/keepData";
/**
 * @type {any}
 */
    export let buttonText;

    const answerSelectByUser = () => {
      let selectByUser = buttonText;
      console.log(selectByUser);
      
        // Obtenir la valeur actuelle du store
        const currentData = $keepSelectedElements;

        // Ajouter un nouvel élément avec l'id approprié
        const newElement = {
            id: currentData.length + 1,
            selectByUser
        };

        // Mettre à jour le store avec la nouvelle valeur
        keepSelectedElements.update(data => [...data, newElement]);
    };
</script>

<div id="bloc">
    <div class="input">
        <button on:click={() => answerSelectByUser()} class="value">{buttonText}</button>
    </div>
</div>

<style>
  .value { /* Style des boutons */
    font-size: 30px; /* Taille du texte */
    background-color: transparent; /* Fond transparent */
    border: none; /* Suppression du style par défaut */
    padding: 0px; /* Pour ajouter un peu d'espace entre le texte et les bords */
    color: white; /* Texte en blanc pour le contraste */
    display: flex; /* Pour aligner le texte et l'icône horizontalement */
    position: relative; /* Pour positionner l'icône */
    gap: 20px; /* Pour ajouter un peu d'espace entre le texte et l'icône */
    cursor: pointer; /* Curseur de souris en forme de main */
    border-radius: 10px; /* Pour arrondir les bords */
    transition: 1s; /* Pour ajouter une transition */
    box-sizing: border-box; /* Pour que la taille du bouton ne change pas au survol */
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

  /*.value svg { /* Style de l'icône */
    /*width: 20px; /* Taille de l'icône */
  /*}*/

  .input:hover > :not(.value:hover) { /* Style des boutons au survol de la zone de saisie */
    transition: 300ms; /* Pour ajouter une transition */
    filter: blur(1.5px); /* Pour flouter les boutons */
    transform: scale(0.95, 0.95); /* Pour réduire la taille des boutons */
  }
</style>