FROM node:latest

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

ENV PATH /usr/src/app/client/node_modules/.bin:$PATH
COPY package*.json /usr/src/app/client/

RUN npm install --silent

COPY . /src/app/client

EXPOSE 3000

CMD [ "npm", "start" ]