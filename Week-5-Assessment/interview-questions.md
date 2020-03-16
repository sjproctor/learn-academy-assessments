# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC is an architecture pattern for organizing an application. MVC stands for Model, View, Controller. The model layer is the database or business logic layer, the View is what the user sees and interacts with, the controller routes the application to the correct view and displays the correct information from the model.

  Researched answer:



2. What is a gem?

  Your answer: A package of code functionality written by another developer made available to the Ruby community. Gems can be used to avoid "reinventing the wheel".

  Researched answer:



3. Why is it important to have validations in your application?

  Your answer: Validations prevent dirty data from being stored in your database. They also increase security by only saving qualified user information.

  Researched answer:



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A Person has_a Computer, a Computer belongs_to a Person. A Person has_many Computers, Computers belong_to a Person. A Person has_many Computers, a Computer has_many People. A Computer has_many People, a Person belong_to (is a user on) a Computer.

  Researched answer:



5. What is object-relational mapping?

  Your answer: ORMs are interpreter languages that allow two incompatible languages to interact. For Ruby/Rails the ORM is for database languages is Active Record.

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- json
- API
- Endpoints
- Strong params
