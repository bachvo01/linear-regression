# Use Alpine-based Node.js image as base
FROM node:21-alpine

# Set the working directory inside the containter
WORKDIR /containter-frontend-app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install 

# Copy everything from source directory to the container
COPY . .

# Expose the port of the Vite server
EXPOSE 8080

# Command to start the development server
CMD ["npm", "run", "dev"]