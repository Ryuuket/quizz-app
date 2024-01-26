article utile
https://www.premieroctet.com/blog/bootstraper-api-avec-nestjs

doc :
https://docs.nestjs.com/techniques/database
https://typeorm.io/migrations


initialiser la bdd dans le dossier src
npx typeorm migration:create -n initial

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
