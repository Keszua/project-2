#FROM node:9-slim
#FROM node:18.3-alpine3.15
FROM node:18.3
WORKDIR /app

COPY package.json .

#RUN npm install -g nodemon

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
		then npm install; \ 
		else npm install --only=production; \
	fi

COPY . ./

ENV PORT 3000
EXPOSE $PORT

# wersja zwykła: (oba polecenia wywołają to samo)
#CMD ["npm", "start"]
CMD ["node", "app.js"]
# wersja developerska
#CMD ["npm", "run", "dev"]

#RUN apt-get update && apt-get install -y --force-yes nano
#RUN apk update && apk add nano

#CMD echo "This is a test." | wc -
#CMD ["apt", "update"]
