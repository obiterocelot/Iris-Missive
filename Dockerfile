FROM ubuntu:24.04

RUN apt-get update && apt-get upgrade -y && apt-get install -y postgresql-16 nodejs npm

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

# Compile TypeScript code into JavaScript
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000
 
CMD [ "npm", "run", "dev" ]