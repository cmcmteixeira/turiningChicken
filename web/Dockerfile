FROM node:6.5.0-slim
RUN npm install -g webpack
RUN npm install -g webpack-dev-server
RUN mkdir /app
EXPOSE 8080
WORKDIR /app

CMD npm run dev-server