# Welcome to REST API Tournaments

## Context

A REST API that is working with typescript. The database is the same that the project called "MVC-Architecture". It is also following this architecture

## What is it for ?

This REST API is hosted by Railway.app and the PSQL DB hosted on neon.tech. You can check the API with all url disponibles to fetch on your applications :

GET : `https://rest-api-tournaments.up.railway.app/tournaments` -> [Get all tournaments](https://rest-api-tournaments.up.railway.app/tournaments)

GET : `https://rest-api-tournaments.up.railway.app/tournament/:id` -> [Get a specific tournament](https://rest-api-tournaments.up.railway.app/tournament/:id)

POST : `https://rest-api-tournaments.up.railway.app/createtournament` -> [Create a new tournament](https://rest-api-tournaments.up.railway.app/createtournament)

DELETE : `https://rest-api-tournaments.up.railway.app/deletetournament/:id` -> [Delete a tournament](https://rest-api-tournaments.up.railway.app/deletetournament/:id)

PATCH : `https://rest-api-tournaments.up.railway.app/modifytournament/:id/:newname` -> [Modify a specific tournament](https://rest-api-tournaments.up.railway.app/modifytournament/:id/:newname) (has to be create in the last 5 minutes)

## How to read commits in this project

:zap: = Minor correction / debug \
:construction: = Work in progress \
:card_file_box: = Datas or contents updated \
:hammer: = New functionnality / component \
:memo: = Readme / Code comments / Documentations \
:rotating_light: = Security \
:sparkles: = Clean code
