#------------------------------------------------------------------------------
# Angular cli Makefile
#------------------------------------------------------------------------------

ANGULAR_DOCKER_CMD = docker-compose -f ${DOCKER_COMPOSE_FILE} run --rm -T --user ${USER_ID}:${GROUP_ID} angular ${1}

#------------------------------------------------------------------------------

angular-test: ##@angular start angular server
	$(call ANGULAR_DOCKER_CMD, ls -l)

#------------------------------------------------------------------------------

.PHONY: angular-serve
