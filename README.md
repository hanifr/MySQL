# MySQL
 
 To set up the environment, follow these steps:

1. Create a .env file in the same directory as the docker-compose.yml file with the following environment variables:
    DB_NAME=your_database
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_PORT=your_port_number

2. Run the following command to start the containers:
    docker-compose up -d

3. Access the Node-RED interface by navigating to http://localhost:1800 in your web browser.

4. Use the MySQL database by connecting to the MySQL container using the following details:
    - Host: localhost
    - Port: ${DB_PORT}
    - Database: ${DB_NAME}
    - Username: ${DB_USER}
    - Password: ${DB_PASSWORD}

