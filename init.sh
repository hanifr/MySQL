#!/bin/bash
# Colors
_CYAN=`tput setaf 1`
_GREEN=`tput setaf 2`
_YELLOW=`tput setaf 3`
_BLUE=`tput setaf 4`
_MAGENTA=`tput setaf 5`
_CYAN=`tput setaf 6`
_RESET=`tput sgr0`

VERSION=1.0

# printing greetings

echo "${_GREEN}docker deployment setup script v$VERSION.${_RESET}"
echo "${_GREEN}(please report issues to tronexia@gmail.com email with full output of this script with extra \"-x\" \"bash\" option)${_RESET}"
echo
# update the OS
if ! sudo apt update; then
  echo "${_RED}ERROR: Failed to update the OS.${_RESET}" >&2
  exit 1
fi

sleep 2
echo "${_YELLOW}Docker Installation :: started.${_RESET}"
echo
if ! curl -sSL https://get.docker.com | sh; then
  echo "${_RED}ERROR: Failed to install Docker.${_RESET}" >&2
  exit 1
fi

sleep 2
if ! apt-get install -y libffi-dev libssl-dev python3-pip && apt-get remove -y python-configparser && pip3 install docker-compose; then
  echo "${_RED}ERROR: Failed to install required packages.${_RESET}" >&2
  exit 1
fi

echo "${_YELLOW}Docker Installation :: completed.${_RESET}"
echo
sleep 2

echo "${_GREEN}(Creating .env file for docker-compose deployment)${_RESET}"
echo
# Create .env file
if ! touch .env; then
  echo "${_RED}ERROR: Failed to create .env file.${_RESET}" >&2
  exit 1
fi

# Add the required environment variables to the .env file
echo "Host=localhost" >> .env
echo "Port=3300" >> .env
echo "Database=tracker" >> .env
echo "Username=orangepi" >> .env
echo "Password=orangepi" >> .env

# Make the .env file only readable by the current user
if ! chmod 600 .env; then
  echo "${_RED}ERROR: Failed to set permissions on .env file.${_RESET}" >&2
  exit 1
fi

echo "${_GREEN}Setup complete.${_RESET}"
