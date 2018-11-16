FROM node:latest

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/client/node_modules/.bin:$PATH
COPY package*.json /usr/src/app/client/

RUN npm install --silent

COPY . /src/app/client
WORKDIR /src/app/client

CMD [ "npm", "start" ]