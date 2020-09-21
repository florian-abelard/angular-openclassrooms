#------------------------------------------------------------------------------
# Angular cli Makefile
#------------------------------------------------------------------------------

ANGULAR_DOCKER_CMD = docker-compose -f ${DOCKER_COMPOSE_FILE} exec -T --user ${USER_ID}:${GROUP_ID} angular ${1}

#------------------------------------------------------------------------------

angular-serve: ##@angular start angular server
	$(call ANGULAR_DOCKER_CMD, ng serve --host 0.0.0.0)

#------------------------------------------------------------------------------

.PHONY: angular-serve
