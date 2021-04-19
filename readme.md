# Code Challenge Grupo ZAP

## Prerequisites:

* Install node js: [NodeJS](https://nodejs.org/en/)

## Start the api

### Step 1: Install the dependencies:

* To install run the following command in terminal: `npm install`

### Step 2: Configure environment variables in .env file

* To see how to configure a [.env](https://www.npmjs.com/package/dotenv) file, click [here](https://www.npmjs.com/package/dotenv).
* The [.env](https://www.npmjs.com/package/dotenv) file, must be a file with the following informations:

 `PORT=3000`

 `NODE_ENV=development`

 `SOURCE_URL=http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json`

 Obs:

 - If you didn't configure the .env file, by default the api will run on PORT 4040, the NODE_ENV environment variable = development and the SOURCE_URL environment variable = http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json.

### Step 3: Start the api:

*  To start the api run the following command in terminal: `npm start`

## Build the api

*  If you just want to build the api from ts to js run the following command in terminal `npm run build`

### Build with docker

* First: Configure the .env.docker.local file, add the following variables to docker environment file (.env.docker.local):

 `PORT=3000`

 `NODE_ENV=development`

 `SOURCE_URL=http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-2.json`

* If you already have docker installed in your machine, just run the following command: `docker-compose up -d`
* If you don't have docker installed, download docker on the following link: [docker](https://www.docker.com/products/docker-desktop), after the docker's instalation is complete, execute this command: `docker-compose up -d`

## Environment Variables

* In this api it's being used the dotenv package, to change the port that api will be listened you just need to create a .env file in the root directory of the project.

### The api environment variables are the following:

* `PORT` the port that the api will be listened.
* `NODE_ENV` the environment of the api, ex: development, production.
* [Click here to see an example of how to configure the .env](./.env.sample)

## Authors

* **Matheus Campos** - *Full-Stack Developer* - [Github](https://github.com/matcampos)
