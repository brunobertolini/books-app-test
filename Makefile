include .env

.PHONY: setup run rm start stop restart logs it rrl

# CREATE CONTAINERS (docker run) -----------------------------------------------

run:
	docker run -t -p ${DOCKER_PORT}:${SERVER_PORT} --env-file .env --name ${DOCKER_NAME} -v $(shell  pwd):/usr/src/app -w /usr/src/app node:4 npm run serve

# DOCKER COMMAND ALIAS ---------------------------------------------------------

rm:
	sudo docker rm -vf ${DOCKER_NAME}

start:
	sudo docker start ${DOCKER_NAME}

stop:
	sudo docker stop ${DOCKER_NAME}

restart:
	sudo docker restart ${DOCKER_NAME}

logs:
	sudo docker logs -f ${DOCKER_NAME}

it:
	sudo docker exec -i -t ${DOCKER_NAME} /bin/bash

rrl: rm run logs
