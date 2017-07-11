#!/bin/sh
ssh -i ~/.ssh/id_tjy docker@ec2-52-14-238-30.us-east-2.compute.amazonaws.com
sudo apk add git
git clone https://github.com/yuntjs/quotes_ui.git
git clone https://github.com/yuntjs/quotes_api.git
git clone https://github.com/yuntjs/quotes-provision-prod.git
docker build -t="quotesui" ./quotes_ui
docker login -u $DOCKER_USER -p $DOCKER_PASS
docker tag quotesui:latest taejunyun/quotesui
docker push taejunyun/quotesui
docker stack deploy -c quotes_api/docker-compose.yml
