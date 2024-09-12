# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Copy the built app from the previous stage to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]