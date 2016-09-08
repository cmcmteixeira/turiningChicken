1. Install [docker](https://www.docker.com/products/overview)
2. Install [compose](https://docs.docker.com/compose/install/)
3. Run `docker-compose build`
3. Run `docker-compose run api npm install`
4. Run `docker-compose run web npm install`
5. Run `docker-compose up api` to lift the api
6. Run `docker-compose up web` to start the web application ( the web application has a dev-server with a live reload enabled so when you change something it will be automagically refreshed in the browser
7. Alternatively you can just type `docker-compose up` and both the web and the api would start 
8. The api runs in port **3001** so if you want to test somthing just acess `127.0.0.1:3001`
9. The web app runs in port **3000** so you can test it by using `127.0.0.1:3000`
