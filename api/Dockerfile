FROM node:6.5.0-slim
RUN npm -g install sails forever@0.14.2
RUN mkdir /app
WORKDIR /app
CMD forever -w app.js --port 3001 --host 0.0.0.0
