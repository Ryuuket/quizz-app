<script>
    import { goto } from '$app/navigation';
  </script>
  
  <style>
    body {
      background-color: #0f00afc8;
      color: white;
      padding: 10px;
      text-align: center;
    }
  
    header {
      background-color: #0f00afc8;
      color: white;
      padding: 10px;
      text-align: center;
    }
  
    h1 {
      margin: 0;
    }
  
    nav {
      margin-top: 10px;
    }
  
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }
  
    li {
      margin-right: 20px;
      cursor: pointer;
    }
  
    li:hover {
      text-decoration: underline;
    }
  
 

  
    img {
      max-width: 100%;
      height: auto;
      margin-top: 20px;
    }
  
    h2 {
      margin-top: 20px;
    }
  
    footer {
      margin-top: 20px;
    }
  </style>
  
  <body>
    <header>
      <!-- Logo and Title -->
      <h1>Welcome to the Developer Quiz</h1>
      <img src="./lib/homepage.jpg" alt="question over a chip">
      <!-- Navigation -->
      <nav>
        <ul>
            <li><button on:click={() => goto('/')}>Home</button></li>
            <li><button on:click={() => goto('/rules')}>Rules</button></li>
            <li><button on:click={() => goto('/ranking')}>Ranking</button></li>
            <li><button on:click={() => goto('/contact')}>Contact us></button></li>
        </ul>
      </nav>
    </header>
    <img src="../media/img/sourire.jpeg" alt="Happy face">
    <h2>You proved yourself to be a worthy developer!</h2>
    <p>You Took it <strong>A.L.L</strong>!</p>
    <p>We are very proud to declare that you answered correctly to the 100 Questions of the Developer Quiz!</p>
    <p>We are very fortunate to certify you that you won the 100 questions correctly!</p>
    <footer>
      <h2>Please do feel free to share the Quiz and your results!</h2>
      <p>You are welcome to try anytime again the quiz or to see your ranking</p>
      <p>The Quiz is a Simplon Academy for coding example of our skills</p>
      <p>You are welcome to follow us on these social media:</p>
      
    </footer>
  </body>
  