ajouter quelques seeds en bdd
via le terminal :

curl --location 'localhost:3000/player' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
    "playerId": 1,
    "playerName": "Axel",
    "playerEmail": "axel@simplon.co",
    "playerPassword": "axel",
    "playerScore": 160
    },
    {
    "playerId": 2,
    "playerName": "Frank",
    "playerEmail": "frank@simplon.co",
    "playerPassword": "frank",
    "playerScore": 160
    },
    {
    "playerId": 3,
    "playerName": "Younes",
    "playerEmail": "younes@simplon.co",
    "playerPassword": "younes",
    "playerScore": 160
    },
    {
    "playerId": 4,
    "playerName": "Julien",
    "playerEmail": "julien@simplon.co",
    "playerPassword": "julien",
    "playerScore": 160
    },
    {
    "playerId": 5,
    "playerName": "Emma",
    "playerEmail": "Emma@simplon.co",
    "playerPassword": "emma",
    "playerScore": 160
    }
]'

curl --location 'localhost:3000/question' \
--header 'Content-Type: application/json' \
--data '[
    {
    "questionId": 1,
    "questionContent": "What is the capital of France?"
    },
    {
    "questionId": 2,
    "questionContent": "Who wrote Romeo and Juliet?"
    },
    {
    "questionId": 3,
    "questionContent": "What is the square root of 25?"
    }
]'

curl --location 'localhost:3000/answer' \
--header 'Content-Type: application/json' \
--data '[
        {
    "answerId": 1,
    "answerContent": "Paris",
    "correctAnswer": true,
    "questionIdAssociated": 1
    },
    {
    "answerId": 2,
    "answerContent": "Madrid",
    "correctAnswer": false,
    "questionIdAssociated": 1
    },
    {
    "answerId": 3,
    "answerContent": "Nantes",
    "correctAnswer": false,
    "questionIdAssociated": 1
    },
    {
    "answerId": 4,
    "answerContent": "London",
    "correctAnswer": false,
    "questionIdAssociated": 1
    },
    {
    "answerId": 5,
    "answerContent": "Marguerite Duras",
    "correctAnswer": false,
    "questionIdAssociated": 2
    },
    {
    "answerId": 6,
    "answerContent": "Victor Hugo",
    "correctAnswer": false,
    "questionIdAssociated": 2
    },
    {
    "answerId": 7,
    "answerContent": "William Shakespeare",
    "correctAnswer": true,
    "questionIdAssociated": 2
    },
    {
    "answerId": 8,
    "answerContent": "Marcel Pagnol",
    "correctAnswer": false,
    "questionIdAssociated": 2
    },
    {
    "answerId": 9,
    "answerContent": "3",
    "correctAnswer": false,
    "questionIdAssociated": 3
    },
    {
    "answerId": 10,
    "answerContent": "5",
    "correctAnswer": true,
    "questionIdAssociated": 3
    },
    {
    "answerId": 11,
    "answerContent": "15",
    "correctAnswer": false,
    "questionIdAssociated": 3
    },
    {
    "answerId": 12,
    "answerContent": "25",
    "correctAnswer": false,
    "questionIdAssociated": 3
    }
]'

requête pour tester :

SELECT
  "question"."questionId",
  "question"."questionContent",
  "answer"."answerId",
  "answer"."answerContent",
  "answer"."correctAnswer"
FROM
  "question"
JOIN
  "answer" ON "question"."questionId" = "answer"."questionId";

---

article utile
https://www.premieroctet.com/blog/bootstraper-api-avec-nestjs

doc :
https://docs.nestjs.com/techniques/database
https://typeorm.io/migrations

---

initialiser la bdd dans le dossier src
npx typeorm migration:create -n initial

---

Se connecter au postgres client
Url : http://localhost:8080/
Identifiant : admin@example.com
Mot de passe : adminpassword

Connecter la bdd au postgres client
Servers -> Nouveau -> Server
Nom : quiz
Connexion
host : postgresdb
base de données : mydatabase
admin: adminuser
password : adminpassword

Retrouver les infos des tables sur postgresclient :
quiz -> bases de données -> mydatabase -> schémas -> tables

---

équivalent SQL des tables orm : 
CREATE TABLE IF NOT EXISTS Player (
  playerId SERIAL PRIMARY KEY,
  playerName VARCHAR(255),
  playerEmail VARCHAR(255),
  playerPassword VARCHAR(255),
  playerScore INT
);

CREATE TABLE IF NOT EXISTS Question (
  questionId SERIAL PRIMARY KEY,
  questionContent VARCHAR(255),
  historyId INT,
  FOREIGN KEY (historyId) REFERENCES History(historyId)
);

CREATE TABLE IF NOT EXISTS Answer (
  answerId SERIAL PRIMARY KEY,
  answerContent VARCHAR(255),
  correctAnswer BOOLEAN DEFAULT false,
  questionId INT,
  FOREIGN KEY (questionId) REFERENCES Question(questionId)
);

CREATE TABLE IF NOT EXISTS History (
  historyId SERIAL PRIMARY KEY,
  playerId INT,
  FOREIGN KEY (playerId) REFERENCES Player(playerId)
);

---