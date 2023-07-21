# Necessary routes for the Tournaments API

| route         |  GET  | POST  | PATCH | DELETE |
| ------------------- | :---: | :---: | :---: | :----: |
| /tournaments        |   ✅   |   ❌   |   ❌   |   ❌  |
| /tournament/:id      |   ✅   |   ❌   |   ❌   |   ❌  |
| /createtournament |   ✅   |   ✅   |   ❌   |   ❌  |
| /deletetournament/:id     |   ❌   |   ❌   |   ❌   |   ✅  |
| /modifytournament/:id/:newname   |   ❌   |   ❌   |   ✅   |   ❌  |
| /sports        |   ✅   |   ❌   |   ❌   |   ❌  |
| /clubs        |   ✅   |   ❌   |   ❌   |   ❌  |
