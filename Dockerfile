# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy remaining source code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
