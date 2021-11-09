FROM node:14.17.0

WORKDIR /express/src
COPY . .

RUN npm install

EXPOSE 3000
CMD [ "node", "HelloWorldAPI.js" ]
