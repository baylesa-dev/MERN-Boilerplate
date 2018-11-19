FROM node:latest

RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server

COPY package*.json /usr/src/app/server/

RUN npm install --silent

COPY . /src/app/server

EXPOSE 8080

CMD [ "npm", "run", "dev" ]