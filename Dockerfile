FROM node:9.1

# Install Utilities
RUN apt-get update -q  \
 && apt-get install -yqq \
 curl \
 git \
 ssh \
 gcc \
 make \
 build-essential \
 libkrb5-dev \
 sudo \
 apt-utils \
 cron \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install chord Prerequisites
RUN npm install --quiet -g gulp-cli bower yo mocha karma-cli pm2

RUN mkdir -p /opt/chord/public/lib
WORKDIR /opt/chord

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# Install npm packages
COPY package.json /opt/chord/package.json
RUN NODE_ENV=development npm install --quiet

# Install bower packages
COPY bower.json /opt/chord/bower.json
COPY .bowerrc /opt/chord/.bowerrc
RUN bower install --quiet --allow-root --config.interactive=false

# Set development environment as default
ENV NODE_ENV production

COPY . /opt/chord
