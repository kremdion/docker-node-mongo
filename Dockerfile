FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm build
COPY . /app
CMD ["npm", "start"]
