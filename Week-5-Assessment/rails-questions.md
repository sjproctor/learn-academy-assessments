# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

  Structured Query Language, the collection of languages used to interact with a relational db.

2. What the PostgreSQL query that would return all the content in a particular table?

  SELECT * FROM table_name

3. What is the command to create a new Rails application with a PostgreSQL database?

  $ rails new my_rails_app -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

  $ rails g (generate) model Meal breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?

  Migrations are use to edit the db. The db cannot be edited directly.

6. What is the command to generate a migration file?

  $ rails g (generate) migration AddColumnToTable

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

  Rails model: PascalCase, singular
  Table: snake_case, plural

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

  Schema is a representation of the db. You can't modify the schema because it is only a representation of the db. The way to change the db is through migrations.

9. What is the Rails console?

  An irb session, build into the Rails environment, can interact with the model
  $ rails c

10. What is the Rails console command to see all the content in a particular table?

  ModelClassName.all
