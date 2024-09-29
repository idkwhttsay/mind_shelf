
FROM node:alpine

WORKDIR /app

COPY ./package*.json /app

RUN npm install

COPY . .
EXPOSE 3012

CMD ["npx", "nodemon", "server.js"]
