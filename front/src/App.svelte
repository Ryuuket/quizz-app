<script lang="ts">
  let url = "";
  const navigate = (path: string) => (url = path);
  import { onMount } from "svelte";
  import interact from "interactjs";
</script>

<div class="background">
  <div class="cache"></div>
  <div class="button-container">
    <div class="buttonStart">
      <button class="button1" on:click={() => navigate("/start")}>START</button>
    </div>
    <div class="buttonLogs">
      <button class="button" on:click={() => navigate("/login")}>Login</button>
      <button class="button" on:click={() => navigate("/signin")}
        >Sign In</button
      >
    </div>
  </div>
</div>

<style>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./lib/homepage.jpg");
    background-size: 100% 100%;
    background-position: center;
  }
  .button-container {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button {
    display: flex;

    text-align: center;
    vertical-align: middle;
    padding: 14px 57px;
    border: 7px solid #4e23db;
    border-radius: 9px;
    background: #4f24de;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#4f24de),
      to(#4820c9)
    );
    background: -moz-linear-gradient(top, #4f24de, #4820c9);
    background: linear-gradient(to bottom, #4f24de, #4820c9);
    -webkit-box-shadow: #adacbf 0px 0px 0px 0px;
    -moz-box-shadow: #adacbf 0px 0px 0px 0px;
    box-shadow: #adacbf 0px 0px 0px 0px;
    font: normal normal bold 26px arial;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
  }
  .button:hover {
    border: 7px solid #7d38ff;
    background: #5f2bff;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#5f2bff),
      to(#5626f1)
    );
    background: -moz-linear-gradient(top, #5f2bff, #5626f1);
    background: linear-gradient(to bottom, #5f2bff, #5626f1);
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .button:active {
    background: #2f1685;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#2f1685),
      to(#4820c9)
    );
    background: -moz-linear-gradient(top, #2f1685, #4820c9);
    background: linear-gradient(to bottom, #2f1685, #4820c9);
    text-transform: uppercase;
  }
  .button:focus {
    text-transform: uppercase;
  }
  /*.button:before {
    content: "\0000a0";
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    margin: 0 4px -6px -4px;
    position: relative;
    top: 0px;
    left: 0px;
  }*/
  .cache {
    height: 75%;
    width: 100%;
   
  }
</style>
