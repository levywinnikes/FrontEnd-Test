![logo](https://www.cinq.com.br/wp-content/uploads/2019/05/cropped-MARCA-CINQ.png)

### Candidate: Andre Levy Scarpim Winnikes ###

* This is the front-end test project for the sample [Users application](https://github.com/cinqtechnologies/front-end-react-test)


### How do I get set up? ###
Make sure you have [NodeJS](https://nodejs.org/en/download/) installed. It includes NPM.

1. download or clone the repository,
2. Open the command prompt (or PowerShell) into the download repo. folder.
3. `npm install`
4. `npm run start`

## Chrome browser will open and the application will be ready.

## Features

* List the users
* Delete user 
* Edit user
	* Show user for user id params in url
* Delete selected users
    * The button named "Delete selected" is disable when no user is selected
* Show user datail
* Responsive small screen layout if screen resolution is less 1024
* Download selected itens for .json
* UI Automated tests uses Cypress


Redux is being used in all transaction

Reactstrap is the visual component framework


## Cypress: install and run

1. On this project terminal tap:
npm install cypress --save-dev

2. Execute cypress with command:
.\node_modules\.bin\cypress open

3. A cypress window should be open

4. Click on user_edit.spec.js and wait 

5. The tests should be run automatically

Note: The tests needs the aplication run on port:3000 






## About

* Author: André Levy S. Winnikes
	* levy.winnikes@gmail.com
	* [Linkedin](https://www.linkedin.com/in/andre-winnikes-5a511b88)
	
Made in NodeJS 

