# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the React app
RUN npm run build

# Serve the app with serve
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000
