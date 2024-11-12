FROM node:20.18.0

WORKDIR /usr/src/app
COPY . .    
RUN npm config set strict-ssl false
RUN npm install
CMD ["npm","run","start:dev"]

EXPOSE 3000