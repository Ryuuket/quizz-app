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
