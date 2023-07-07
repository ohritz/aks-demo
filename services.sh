#!/usr/bin/env bash

createnetwork() {
    docker network create cb-demo-local
}

networksexists() {
    local exists=$(docker network ls | grep cb-demo-local)
    if [ -n "$exists" ]; then
        return 0
    else
        return 1
    fi
}

startservices() {
    local seed=$1
    if networksexists; then
        echo "Network already exists"
    else
        createnetwork
    fi
    
    docker-compose up -d
    if [ -n "$seed" ]; then
        docker-compose -f docker-compose.seed.yml up -d
    fi
}

stopservices() {
    docker-compose down
    docker-compose -f docker-compose.seed.yml down
    docker network rm cb-demo-local
}


main() {
    local cmd=$1
    case $cmd in
        start)
            shift
            startservices $@
        ;;
        stop)
            shift
            stopservices $@
        ;;
        *)
            echo "Unknown command: $cmd"
        ;;
    esac
}
main $@
