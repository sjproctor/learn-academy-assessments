# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be called animal_id and it would be on the sightings model.

  Researched answer:



2. Which routes must always be passed params and why?

  Your answer: Show, update, delete - because these methods act on a single entry in the database so a param of id must be passed to the route

  Researched answer:



3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer: /game/:guess => game#main



4. Name three rails generator commands. What is created by each?

  Your answer: rails generate controller - creates a controller and view directory, rails generate model - creates a migration, a schema, a model class, rails generate resource - creates the same stuff as the model and controller generate commands plus all the routes

  Researched answer:



  5. Consider the Rails routes below. Describe the responsibility of each route.

  method="GET"    /users - index, gets all the users   

  method="GET"    /users/1 - show, gets one user by id

  method="GET"    /users/new - new, shows a form for create

  method="GET"    /users/edit/1 - shows a form for edit  

  method="POST"   /users - create, adds a new user       

  method="PUT"    /users/1 - edits an existing user

  method="DELETE" /users/1 - destroy, deletes a user
