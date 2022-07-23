
# specify a base image
FROM node:alpine

# setup working directory
WORKDIR '/usr/src/app'

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN yarn install --silent
RUN yarn add global react-scripts@5.0.1

# add app
ADD . /usr/src/app

# start app
CMD ["yarn", "start"]