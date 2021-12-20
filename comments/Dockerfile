FROM node

WORKDIR /app/comments

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 4001

CMD [ "npm", "start" ]