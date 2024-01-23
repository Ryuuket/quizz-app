<script lang="ts">
  let url = "";
  const navigate = (path: string) => (url = path);
  
</script>

<style>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./lib/homepage.jpg");
    background-size: 100% 100%; /* change this line */
    background-position: center;
  }
  .button-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .button {
    display: inline-block;
    margin: 20px;
    padding: 10px 20px;
    font-size: 20px;
    text-decoration: none;
    color: white;
    background-color: #792d75;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .button:hover {
    background-color: #0056b3;
  }
</style>

<div class="background">
  <div class="button-container">
    <button class="button" on:click={() => navigate("/start")}>Start</button>
    <button class="button" on:click={() => navigate("/login")}>Login</button>
    <button class="button" on:click={() => navigate("/signin")}>Sign In</button>
  </div>
</div>
