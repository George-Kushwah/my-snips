FROM node:23.5.0-alpine AS build
WORKDIR /my-apps
COPY package*.json .
RUN npm install 
COPY package-lock.json .
COPY tsconfig.json .
COPY . .
#EXPOSE 3002
#CMD ["npm", "run", "dev"]
RUN npm run build

# Step 2: create build
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# Copy the build artifacts from the previous stage
COPY --from=build /my-apps/dist /usr/share/nginx/html

# Expose port 80 to the outside world
#EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
#RUN npm run build




