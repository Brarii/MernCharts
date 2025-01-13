# Use node:16 for frontend
FROM --platform=linux/amd64 node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json from the current context (frontend folder)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code from the current context (frontend folder)
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
