FROM node:latest
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run compile
EXPOSE 3001
CMD ["node", "dist/src/index.js"]