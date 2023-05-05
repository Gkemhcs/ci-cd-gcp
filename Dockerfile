FROM node
RUN mkdir  src
WORKDIR src
COPY package.* ./
RUN npm i
COPY . .
CMD ["node","server.js"]