#!/bin/bash
ssh -o "StrictHostKeyChecking no" docker@ec2-52-14-238-30.us-east-2.compute.amazonaws.com env TAG=$TAG DOCKER_USER=$DOCKER_USER DOCKER_PASS=$DOCKER_PASS 'bash -s' <<'ENDSSH'
  rm -rf quotes_ui quotes_api quotes-provision-prod
  docker service update --image $TAG --force app_ui
ENDSSH
