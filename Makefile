.PHONY: mongo rabbit run rm start stop restart logs it rrl test

# VARIABLES --------------------------------------------------------------------

DOCKER_NAME := books-app

# DOCKER CONTAINERS ------------------------------------------------------------

run:
	docker run -t -p 8080:8080  -p 3000:3000 --name ${DOCKER_NAME} -v $(shell  pwd):/usr/src/app -w /usr/src/app node:4 npm start

# DOCKER COMMAND ALIAS

rm:
	docker rm -vf ${DOCKER_NAME}

start:
	docker start ${DOCKER_NAME}

stop:
	docker stop ${DOCKER_NAME}

restart:
	docker restart ${DOCKER_NAME}

logs:
	docker logs -f ${DOCKER_NAME}

it:
	docker exec -i -t ${DOCKER_NAME} /bin/bash

rrl: rm run logs
