# Code Challenge Grupo ZAP

## Prerequisites:

* Install node js: [NodeJS](https://nodejs.org/en/)

## Environment Variables

* In this api it's being used the dotenv package, to change the port that api will be listened you just need to create a .env file in the root directory of the project.

### The api environment variables are the following:

* `PORT` the port that the api will be listened.
* `NODE_ENV` the environment of the api, ex: development, production.
* `SOURCE_URL` the source json data url.
* [Click here to see an example of how to configure the .env](./.env.sample)

## Start the api

### Step 1: Install the dependencies:

* To install, run the following command in terminal (CMD): `npm install`

### Step 2: Configure environment variables in .env file

* In the root directory of the project create a file named [.env](https://www.npmjs.com/package/dotenv) with these informations:

 `PORT=3000`

 `NODE_ENV=development`

 `SOURCE_URL=http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json`

 * To see more informations on how to configure a [.env](https://www.npmjs.com/package/dotenv) file, click [here](https://www.npmjs.com/package/dotenv).

 Obs:

 - If you didn't configure the .env file, by default the api it will runs on PORT 3000, the NODE_ENV environment variable will be development and the SOURCE_URL environment variable will be http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json.

### Step 3: Start the api:

*  To start the api run the following command in the terminal (CMD): `npm start`

## Build the api

*  If you just want to build the api from ts to js run the following command in the terminal (CMD) `npm run build`, after the build finishes, a folder called `dist` will be generated, in this folder are the files witch will be excecuted on a deploy for example.

### Build with docker

* First: Configure the .env.docker.local file, add the following variables to docker environment file (.env.docker.local):

 `PORT=3000`

 `NODE_ENV=development`

 `SOURCE_URL=http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json`

* If you already have docker installed in your machine, just run the following command: `docker-compose up -d`
* If you don't have docker installed, download docker on the following link: [docker](https://www.docker.com/products/docker-desktop), after the docker's instalation is complete, execute this command: `docker-compose up -d`

 ## Tests

 * To run the tests, run the following command in the terminal (CMD) in the root directory of the project: `npm run test`
 * To get the coverage run the following command in the terminal (CMD): `npm run coverage`, this command will generate a folder called `coverage`, in this folder there is a file called `index.html`, open this file in browser to see the code coverage of the project.
 * In the following image we can see the code coverage of the project opened on browser.

 ![Code Coverage](/documents/code-coverage.png)

 ## Deploy

 * To deploy this application, you must download the project from github in the server that you want to do the deploy, and then you must execute these steps:

 - First, install [NodeJS](https://nodejs.org/en/) in the machine.
 - Then, open the terminal (CMD) and go to the root directory of the roject and install the dependencies: `npm install`.
 - Then, execute the build command: `npm run build`.
 - To run the project, I recommend you to download this library [Pm2](https://www.npmjs.com/package/pm2), to download open the terminal (CMD) and run this command: `npm install pm2 -g`, Pm2 it's a process manager that will execute the application in background in your machine, The following link shows more informations about pm2 [link](https://pm2.keymetrics.io/)
 - After the Pm2 instalation successfully conclusion, in the terminal (CMD) go to the root directory of the project and run the following command: `pm2 start dist/app.js --name code-challenge-grupo-zap`, the parameter --name on the command is the name of the process on pm2, the following images will show to us more clearly the proccess being started.

 ![Pm2 Process Start](/documents/pm2-process-start.png)

 * To see the logs that applications is showing after the process start, run the following command: `pm2 log code-challenge-grupo-zap --lines 100`, this command will show the last 100 log lines of the application, you can change the param --lines as you wish.


## Authors

* **Matheus Campos** - *Full-Stack Developer* - [Github](https://github.com/matcampos)
