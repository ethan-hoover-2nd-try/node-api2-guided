## Design Process

- gather requirements (figure out the goals and needs of the project)
- list of resources (nouns) [recipe, recipe-type, description, ingredients, chef-name]
- list of endpoints

## Endpoints

- avoid using verbs, it's not a URL, it's a URI. (instead of create-recipe => /api/recipes)
- actions are expressed with http methods


Songs

Properties9

- name
- duration
- artists
- year
- recordLabel

Actions 

- create
- find a song by (filters)
- update
- delete
- paginated list (filters)
- album art

| Action        | Method | Endpoint       |
| :------------ |:------ |:---------      |
| List songs    | Get    | /api/songs     |
| Create a Song | POST   | /api/songs     |
| Update a Song | PUT    | /api/songs/:id |
| Remove a song | DELETE | /api/songs/:id |
| Add Song's Album Art| Put | /api/songs/:id/cover |

## CommonJS module system

- import a module using: require();
- export a module using: 

<!-- Filtering and sorting is always the responsiblity of the server -->