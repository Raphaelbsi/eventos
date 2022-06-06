FROM node:14.17.4-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i 

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]