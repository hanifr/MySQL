## MySQL

To set up the environment, follow these steps:
```
sudo -i

git clone https://github.com/hanifr/MySQL.git

cd MySQL

chmod +x init.sh

./init.sh
```

### What it does
The \`init.sh\` script is intended for deploying docker environment in OrangePi. For Linux and MacOS users, you can download and install Docker-Desktop first and then run \` ./createENV.sh \`

The \`init.sh\` script will execute the following
1. Installs Docker and Docker Compose libraries on the host machine.
2. Creates a \`.env\` file in the same directory as the script.
3. Adds the required environment variables to the \`.env\` file.
4. Sets the file permissions of the \`.env\` file to be only readable by the current user.


\` ./createENV.sh \`
This script creates a .env file for a project and sets the required environment variables.

Usage
This repository contains a \`createENV.sh\` script that creates a .env file for a project and sets the required environment variables. To use this script, run the following command:

```
./createENV.sh
```

This will create a .env file in the current directory and set the following environment variables:
```
DB_PORT: the port number for the database server (default: 3300)
DB_NAME: the name of the database (default: tracker)
DB_USER: the username for the database (default: orangepi)
DB_PASSWORD: the password for the database (default: orangepi)
```
Customizing Environment Variables
You can customize the environment variables by running the script with command line arguments. The available options are:

```
--port: sets the port number for the database server
--name: sets the name of the database
--user: sets the username for the database
--password: sets the password for the database
```