
FROM node:16-alpine

# setup working directory
WORKDIR '/usr/src/app'

# Install app dependencies
COPY package*.json ./

RUN yarn install --silent
RUN yarn add global react-scripts@5.0.1

# Bundle app source
COPY . .

#Expose port and start application
EXPOSE 3000

# start app
CMD ["yarn", "start"]