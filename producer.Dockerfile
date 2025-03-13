FROM node:20-alpine AS builder

WORKDIR /build
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build:producer

EXPOSE 3001

CMD ["npm", "run", "start:producer"]