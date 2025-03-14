FROM node:20-alpine AS builder

WORKDIR /build
COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build:consumer

EXPOSE 3000

CMD ["npm", "run", "start:consumer"]
