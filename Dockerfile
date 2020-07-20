FROM node:12
WORKDIR /server
COPY . .
RUN npm install
EXPOSE 80
CMD ["node", "server.js"];
