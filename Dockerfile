FROM mhart/alpine-node:latest

MAINTAINER devonzuegel@gmail.com

WORKDIR /app
ADD . .

RUN npm install

EXPOSE 8889

CMD ["npm", "run", "start:prod"]
