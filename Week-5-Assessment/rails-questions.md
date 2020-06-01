# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new my_app -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - the http verb associated with the route
library - the url path
:id - the param of id to pass the appropriate information
book - the name of the controller
show - the name of the method in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

- generate a migration called something like add_foreign_key_to_table_name
- $ rails generate migration add_foreign_key_to_table_name
- in *db/migrate* add a line to the change method: add_column :table_name :table_id :integer
- $ rails db:migrate

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string



5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

Rails model: PascalCase, singular
Table: snake_case, plural


5. (Had to push because of time issues - didn't cover validations) I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

validates :shirt, :pants, :shoes, presence: true
