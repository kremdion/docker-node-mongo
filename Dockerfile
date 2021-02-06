FROM alpine
RUN apk update && apk add --update nodejs npm
WORKDIR /app
COPY package.json /app
RUN npm build
COPY . /app
CMD ["npm", "start"]
