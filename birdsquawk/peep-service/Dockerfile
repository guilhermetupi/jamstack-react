FROM node:alpine

RUN apk update && apk add nodejs
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]