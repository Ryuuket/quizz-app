<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let offsetX = 0;
  let offsetY = 0;
  const friction = 1 / 128;

  function mouseMove(e: MouseEvent) {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;

    offsetX = x;
    offsetY = y;
  }

  onMount(() => {
    document.addEventListener("mousemove", mouseMove);
  });

  onDestroy(() => {
    document.removeEventListener("mousemove", mouseMove);
  });
</script>

<figure
  style:transform="perspective(600px) rotateY({offsetX}deg) rotateX({offsetY}deg)"
>
  <h1><slot/></h1>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>
  <span aria-hidden="true"><slot/></span>

</figure>

<style>
  @import url(https://fonts.googleapis.com/css?family=Concert+One);

  h1, span {
    animation: glow 10s ease-in-out infinite;
  }

  figure {
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

  h1, span {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 3em;
    font-family: "Concert One";
    text-transform: uppercase;
    position: absolute;
    color: #3b3b3b;
  }

  @keyframes glow {
    0%,
    100% {
      text-shadow: 0 0 30px rgb(235, 195, 86);
    }
    25% {
      text-shadow: 0 0 30px orange;
    }
    50% {
      text-shadow: 0 0 30px rgb(22, 189, 22);
    }
    75% {
      text-shadow: 0 0 30px cyan;
    }
  }

  span:nth-child(2) {
    transform: translateZ(5px);
  }
  span:nth-child(3) {
    transform: translateZ(10px);
  }
  span:nth-child(4) {
    transform: translateZ(15px);
  }
  span:nth-child(5) {
    transform: translateZ(20px);
  }
  span:nth-child(6) {
    transform: translateZ(25px);
  }
  span:nth-child(7) {
    transform: translateZ(30px);
  }
  span:nth-child(8) {
    transform: translateZ(35px);
  }
  span:nth-child(9) {
    transform: translateZ(40px);
  }
  span:nth-child(10) {
    transform: translateZ(45px);
  }
</style>
