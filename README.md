## MySQL

To set up the environment, follow these steps:

\`\`\`
$ sudo -i
$ git clone https://github.com/hanifr/MySQL.git
$ cd MySQL
$ chmod +x init.sh
$ ./init.sh
\`\`\`

### What it does

The \`init.sh\` script does the following:

1. Installs Docker and Docker Compose libraries on the host machine.
2. Creates a \`.env\` file in the same directory as the script.
3. Adds the required environment variables to the \`.env\` file.
4. Sets the file permissions of the \`.env\` file to be only readable by the current user.

### Environment Variables

The following environment variables are set in the \`.env\` file:

- \`Host\`: The hostname for the database.
- \`Port\`: The port number for the database.
- \`Database\`: The name of the database.
- \`Username\`: The username for the database.
- \`Password\`: The password for the database.

If you wish to change the above setup, execute the following command:

\`\`\`
$ nano init.sh
\`\`\`

Change the parameters as you wish.

To start the containers, run the following command:

\`\`\`
docker-compose up -d
\`\`\`

To access the MySQL database, connect to the MySQL container using the following details:

- Host: \`localhost\`
- Port: \`\${DB_PORT}\`\`
- Database: \`\${DB_NAME}\`\`
- Username: \`\${DB_USER}\`\`
- Password: \`${DB_PASSWORD}\`\`

