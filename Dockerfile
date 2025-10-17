# take a node image
FROM node:23-alpine

# define the work space in the container
WORKDIR /home/node/app

# copy package in the workdir 
COPY package*.json ./

# install the dependencies
RUN npm install

# copy everything in the the workdir
COPY . .

# expose the port 3000
EXPOSE 3000

# command to run our server
CMD [ "node", "server.js" ]