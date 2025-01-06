FROM node:22-alpine

WORKDIR /app/

COPY package.json /app
RUN npm install
RUN touch .env


# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

RUN npm run migrations:run

# Start the server using the production build
CMD [ "node", "dist/main.js" ]