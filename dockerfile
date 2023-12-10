FROM node:20.9.0-alpine

RUN mkdir -p /root/app
WORKDIR /root/app/

COPY package*.json ./
ADD . /root/app
RUN npm install && npm run build

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]