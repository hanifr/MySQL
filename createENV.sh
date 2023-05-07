#!/bin/bash

# Prompt user for input
read -p "Enter DB_PORT: " DB_PORT
read -p "Enter DB_NAME: " DB_NAME
read -p "Enter DB_USER: " DB_USER
read -p "Enter DB_PASSWORD: " DB_PASSWORD

# Create .env file
if ! touch .env; then
  echo "Failed to create .env file."
  exit 1
fi

# Add the required environment variables to the .env file
echo "DB_PORT=$DB_PORT" >> .env
echo "DB_NAME=$DB_NAME" >> .env
echo "DB_USER=$DB_USER" >> .env
echo "DB_PASSWORD=$DB_PASSWORD" >> .env

# Make the .env file only readable by the current user
if ! chmod 600 .env; then
  echo "Failed to set permissions on .env file."
  exit 1
fi

echo "env file created successfully."
