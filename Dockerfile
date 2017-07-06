FROM ubuntu:14.04.1
MAINTAINER yuntjs@gmail.com

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    apt-add-repository ppa:ansible/ansible && \
    apt-get update && \
    apt-get install -y ansible

EXPOSE 80

COPY . /ui
WORKDIR /ui

RUN ansible-playbook nginx.yml
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# CMD "/bin/bash"
CMD ["nginx"]
