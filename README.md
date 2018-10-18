# Chord.io

Chord is built using a full-stack JavaScript open-source solution, incorperating [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/). For more information see [MEANJS](https://github.com/meanjs/mean).

## Running things locally
You'll have better luck if your operating system is Ubuntu 18.04.2 LTS (Bionic Beaver). Everything will only fit if you have more than ~1GB of free space. Your dev setup should probably be in the neighborhood of >8GB ram and >2.5GHz cpu to get performance that's not completely slow and annoying.

### Cloning the app
First step is to clone the app to your local machine. Do this by

```
git clone https://github.com/mmassey477/chord.io.git

cd chord.io
```

### Installing Docker
Docker is a tool for running My computer currently uses Docker v18.06.0-ce. Follow the Docker [install instructions](https://docs.docker.com/engine/installation/linux/ubuntu/#install-from-a-package) to install Docker.

### Installing Docker-Compose
You should have at least version 1.21.2 of docker-compose installed. [How to install](https://docs.docker.com/compose/install/#install-as-a-container).

### Installing NodeJS
NodeJS is required to be version 8.12.0 to run correctly with all the packages. [How to install](https://nodejs.org/en/)

### Installing MongoDB-org
Next install MongoDB-org for Ubuntu 18.04 Bionic Beaver. [How to install](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)

### Installing packages with npm
You will now have to install all of the dependencies using npm. To do this, navigate to the project root directory and run

```
npm install
```
### Getting Started
Once everything has been installed we can now build the docker images that our containers will pull when they are created. DO this by running 

```
docker-compose up
```
This will build all of the docker dependencies and begin serving the app through port 8443. To access the app target a browser to http://localhost:8443. This will take you to the homepage of the app.
