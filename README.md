# quizz-app

Stack technique :

## Front-end
- Vite + svelte
- Langage Typescript

## Back-end
- Server, API : NestJS + Typescript
- BDD: Postgres

Lire la partie overview et la partie fundamentals

## Architecture du projet

### Dossier front-end
- dossier components
- dossier lib
- dossier pages ou routes
- fichier index.hml

### Dossier back-end
// revoir la logique API en fonction de NestJS (type orm)
- dossier API
    - dossier controllers
    - dossier entities
    - dossier models
    - dossier database (lien API et database)
    - dosssier services
    - dossier dto
- dossier db avec la base de données sql
- fichier server.ts

## Pour lancer Docker :
// Compose-up docker
docker-compose up

// Forcer le rebuild
docker-compose up --force-recreate --build

CREATE TABLE "player" (
    player_id SERIAL PRIMARY KEY,
    player_name VARCHAR(50) NOT NULL,
    player_email VARCHAR(50) NOT NULL,
    player_password VARCHAR(50) NOT NULL,
    player_score INT,
    player_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "question" (
    question_id SERIAL PRIMARY KEY,
    question_content VARCHAR(200)
);

CREATE TABLE "answer" (
    answer_id SERIAL PRIMARY KEY,
    answer_content VARCHAR(200),
    answer_boolean BOOLEAN,
    question_id SERIAL REFERENCES question(question_id)
);

CREATE TABLE "history" (
    history_id SERIAL PRIMARY KEY,
    player_id SERIAL REFERENCES player(player_id),
    question_id SERIAL REFERENCES question(question_id),
    PRIMARY KEY (player_id, question_id)
);
