<script lang="ts">

import { onMount, onDestroy } from 'svelte';

  let offsetX = 0;
  let offsetY = 0;
  const friction = 1 / 32;

  function mouseMove(e) {
    let followX = (window.innerWidth / 2 - e.clientX);
    let followY = (window.innerHeight / 2 - e.clientY);

    let x = 0, y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;

    offsetX = x;
    offsetY = y;
  }

  onMount(() => {
    document.addEventListener('mousemove', mouseMove);
  });

  onDestroy(() => {
    document.removeEventListener('mousemove', mouseMove);
  });
</script>

<figure style:transform="perspective(600px) rotateY({offsetX}deg) rotateX({offsetY}deg)">
    <p><slot /><p/>
    <p><slot /><p/><p>
    <slot /><p/><p>
    <slot /><p/><p>
    <slot /><p/>
  </figure>
  
  <style>
    @import url(https://fonts.googleapis.com/css?family=Concert+One);
  
    p {
      animation: glow 10s ease-in-out infinite;
    }
  
    figure {
        /*position: relative; /* Positionnement relatif */
      transform-origin: center center;
      transform-style: preserve-3d;
    }
  
    @keyframes wobble {
      0%,
      100% {
        transform: rotate3d(1, 1, 0, 40deg);
      }
      25% {
        transform: rotate3d(-1, 1, 0, 40deg);
      }
      50% {
        transform: rotate3d(-1, -1, 0, 40deg);
      }
      75% {
        transform: rotate3d(1, -1, 0, 40deg);
      }
    }
  
    p {
      display: flex;
      width: 100%;
      height: 100%;
      /*line-height: 1.5;
      /*font:*/
      font-size: 3em;
      font-family: "Concert One";
        /*20 8em "Concert One",
        sans-serif;*/
      text-transform: uppercase;
      position: absolute;
      color: #0a0a0a;
      
    }
  
    @keyframes glow {
      0%,
      100% {
        text-shadow: 0 0 30px red;
      }
      25% {
        text-shadow: 0 0 30px orange;
      }
      50% {
        text-shadow: 0 0 30px forestgreen;
      }
      75% {
        text-shadow: 0 0 30px cyan;
      }
    }
  
    h1:nth-child(2) {
      transform: translateZ(5px);
    }
    h1:nth-child(3) {
      transform: translateZ(10px);
    }
    h1:nth-child(4) {
      transform: translateZ(15px);
    }
    h1:nth-child(5) {
      transform: translateZ(20px);
    }
    h1:nth-child(6) {
      transform: translateZ(25px);
    }
    h1:nth-child(7) {
      transform: translateZ(30px);
    }
    h1:nth-child(8) {
      transform: translateZ(35px);
    }
    h1:nth-child(9) {
      transform: translateZ(40px);
    }
    h1:nth-child(10) {
      transform: translateZ(45px);
    }
  </style>
  