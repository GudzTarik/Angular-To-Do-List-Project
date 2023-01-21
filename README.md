# TechTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# Angular Technical Test
We've designed a small remote technical test, that is open ended. You should be able to make choices and assumptions without guidance. We're interested in seeing how you think and architect out the code. You should not spend more than 3 hours on this so think strategically about what you want to show.

Clone this repo and send us a link to your work. We will review ASAP and decide whether to invite in for interview.

###  Spec:
We want to test your ability to write clean modular angular code that talks to a RESTful API endpoints.
* Build a todo list single page application.
* Add/Edit/Delete todo items
* Mark todo item as done
* Ability to filter items in the todo list

We have set up for you a project and a mock local server.              

GET  from http://localhost:3000/tasks ← list all todo items                 
GET /1 ← view detail of a specific todo item, where id = 1                  
POST ← creates a new todo item (as long as it has an available id)                 
PATCH /1 ← edits the todo item with id = 1             
DELETE /1 ← deletes the todo item, with id = 1               

              
###  We would like to see the following:

* JS code unit tests
* Modular Angular code 
* Dependency injection 

###  Nice to have:                 

* Some basic styling with SASS. It would be nice if you can demonstrate how to write modular SCSS code


Additional notes:            
The frontend is in Angular 8. We used json-server to mock backend. You are free to use any other plugins as you wish.
There is no time constraint, when you’re happy with it, send it to us as well as how much time you spent on it.
Any extra feature you can add will be appreciated.                
Whatever you do send please do it to the best of your abilities, please be proud of what you send. Quality > Quantity.
Setup of the project should be easy and detailed.


### Quick start
#### clone the repo
Go to your developer folder
Clone this project repository to your local machine

#### change into the repo directory
`cd tech-test`

#### install
`npm install`

#### serve
`npm run server`                   
`npm run start`

#### Running unit tests
`npm run test`

