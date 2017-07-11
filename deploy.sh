#!/bin/bash
ssh -o "StrictHostKeyChecking no" docker@ec2-52-14-238-30.us-east-2.compute.amazonaws.com env DOCKER_USER=$DOCKER_USER DOCKER_PASS=$DOCKER_PASS 'bash -s' <<'ENDSSH'
  rm -rf quotes_ui quotes_api quotes-provision-prod
  sudo apk update
  sudo apk add git
  git clone https://github.com/yuntjs/quotes_ui.git
  git clone https://github.com/yuntjs/quotes_api.git
  git clone https://github.com/yuntjs/quotes-provision-prod.git
  docker stack deploy -c /home/docker/quotes-provision-prod/docker-compose.yml app
ENDSSH
