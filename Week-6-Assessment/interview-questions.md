# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  Researched answer: To change the db, I would have to create a migration.
    - Foreign key: animal_id
    - Foreign key is part of the animal model
    - $ rails g migration add_foreign_key_to_animal
    - add_column :animals, :animal_id, :integer
    - $ rails db:migrate


2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer: show, delete, update - because in order to perform these actions we have to extract a single instance from the db



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer:
    - rails g controller - controller, view folder
    - rails g model - migration, model class
    - rails g resource - migration, model class, controller, routes, view folder
    - rails g rspec:install - spec files and helpers


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         index, all the students        

method="GET"    /students/2       show, just one student by id

method="GET"    /students/new     new, a form to create a new student

method="GET"    /students/edit/2  edit, a form to update an existing student

method="POST"   /students         create, add a student to the db   

method="PATCH"  /students/2       update, update a student in the db     

method="DELETE" /students/2      destroy, remove a student from the db



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.

1. As a user, I can save a title of my to do list item in the app
2. As a user, I can save a description of my to do list item in the app
3. As a user, I can save a status of my to do list item in the app
4. As a user, I can group my to do items into a list
5. As a user, I can give my to do list a name
6. As a user, I can ensure my do to list items always have a name in the app
7. As a user, I can ensure my do to list items always have a status in the app
8. As a user, I can update the status of my to do list items
9. As a user, I can edit my to do list items
9. As a user, I can edit my to do list names
10. As a user, I can delete my to do list items
11. As a user, I can delete my to do lists
