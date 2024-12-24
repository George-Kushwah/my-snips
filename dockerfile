FROM node:23.5.0-alpine
WORKDIR /my-apps
COPY package*.json .
RUN npm install 
COPY package-lock.json .
COPY tsconfig.json .
COPY . .
EXPOSE 3002
#RUN npm run build
CMD ["npm", "run", "dev"]



