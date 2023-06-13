# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY index.cjs index.cjs

# Env
ENV READER_PATH /app/data

# Volume
VOLUME [ "/app/data" ]

# Start the application
CMD [ "npm", "start" ]
