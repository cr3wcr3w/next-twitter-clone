#!/bin/bash


# Function to say hello
remove_container() {
    echo -e "\n"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\e[32m Removing container \e[0m"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\n"

    docker compose down
    exit 0
}

# Trap SIGINT signal (Ctrl+C) and call say_hello function
trap remove_container SIGINT

if ! [ -x "$(command -v docker)" ]; then
  echo -e "\n"
  echo -e "\e[31m Docker is not installed. Please install docker and try again.\nDocker install guide: https://docs.docker.com/engine/install/ \e[0m" >&2
  echo -e "\n"
  exit 1
fi

if ! [ -x "$(command -v pnpm)" ]; then
  echo -e "\n"
  echo -e "\e[31m Docker is not installed. Please install pnpm and try again.\nDocker install guide: https://pnpm.io/installation \e[0m" >&2
  echo -e "\n"
  exit 1
fi

initialize() {

    echo -e "\n"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\e[32m pnpm install \e[0m"
    echo -e "\e[32m-----------------------------------------------\e[0m"

    # install dep
    pnpm install

    echo -e "\n"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\e[32m Running docker \e[0m"
    echo -e "\e[32m-----------------------------------------------\e[0m"

    # Stop any existing containers
    docker-compose down

    # Start containers
    docker-compose up -d

    echo -e "\n"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\e[32m Copying .env.example into .env \e[0m"
    echo -e "\e[32m-----------------------------------------------\e[0m"

    # make a copy of env
    cp .env.example .env

    # push the shcema to your database
    pnpm db:push
}

if [[ $1 = '-dev' ]]; then

    initialize

    echo -e "\n"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\e[32m Dev Mode \e[0m"
    echo -e "\e[32m You can run Prisma Studio by executing: pnpm db:studio\e[0m"
    echo -e "\e[32m-----------------------------------------------\e[0m"

    # dev mode
    pnpm dev
elif [[ $1 = '-build' ]]; then

    initialize

    echo -e "\n"
    echo -e "\e[32m-----------------------------------------------\e[0m"
    echo -e "\e[32m BUILD MODE \e[0m"
    echo -e "\e[32m You can run Prisma Studio by executing: pnpm db:studio\e[0m"
    echo -e "\e[32m-----------------------------------------------\e[0m"

    # Build project
    pnpm build

    # Start project
    pnpm start
else
    echo -e "\e[31mUsage: $0 [-dev|-build]\e[0m" >&2
    exit 1
fi



