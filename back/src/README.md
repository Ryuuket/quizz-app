ajouter quelques seeds en bdd
via le terminal :

curl --location 'localhost:3000/user' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
    "id": 1,
    "name": "Axel",
    "email": "axel@simplon.co",
    "password": "axel",
    "score": 160
    },
    {
    "id": 2,
    "name": "Frank",
    "email": "frank@simplon.co",
    "password": "frank",
    "score": 160
    },
    {
    "id": 3,
    "name": "Younes",
    "email": "younes@simplon.co",
    "password": "younes",
    "score": 160
    },
    {
    "id": 4,
    "name": "Julien",
    "email": "julien@simplon.co",
    "password": "julien",
    "score": 160
    },
    {
    "id": 5,
    "name": "Emma",
    "email": "Emma@simplon.co",
    "password": "emma",
    "score": 160
    }
]'

curl --location 'localhost:3000/question' \
--header 'Content-Type: application/json' \
--data '[
    {
    "id": 1,
    "content": "What is the capital of France?"
    },
    {
    "id": 2,
    "content": "Who wrote Romeo and Juliet?"
    },
    {
    "id": 3,
    "content": "What is the square root of 25?"
    }
]'

curl --location 'localhost:3000/answer' \
--header 'Content-Type: application/json' \
--data '[
        {
    "id": 1,
    "content": "Paris",
    "answer": true,
    "questionId": 1
    },
    {
    "id": 2,
    "content": "Madrid",
    "answer": false,
    "questionId": 1
    },
    {
    "id": 3,
    "content": "Nantes",
    "answer": false,
    "questionId": 1
    },
    {
    "id": 4,
    "content": "London",
    "answer": false,
    "questionId": 1
    },
    {
    "id": 5,
    "content": "Marguerite Duras",
    "answer": false,
    "questionId": 2
    },
    {
    "id": 6,
    "content": "Victor Hugo",
    "answer": false,
    "questionId": 2
    },
    {
    "id": 7,
    "content": "William Shakespeare",
    "answer": true,
    "questionId": 2
    },
    {
    "id": 8,
    "content": "Marcel Pagnol",
    "answer": false,
    "questionId": 2
    },
    {
    "id": 9,
    "content": "3",
    "answer": false,
    "questionId": 3
    },
    {
    "id": 10,
    "content": "5",
    "answer": true,
    "questionId": 3
    },
    {
    "id": 11,
    "content": "15",
    "answer": false,
    "questionId": 3
    },
    {
    "id": 12,
    "content": "25",
    "answer": false,
    "questionId": 3
    }
]'

requête pour tester :

SELECT
  "question"."id",
  "question"."content",
  "answer"."id",
  "answer"."content",
  "answer"."answer"
FROM
  "question"
JOIN
  "answer" ON "question"."id" = "answer"."questionId";

---

article utile
https://www.premieroctet.com/blog/bootstraper-api-avec-nestjs

doc :
https://docs.nestjs.com/techniques/database
https://typeorm.io/migrations