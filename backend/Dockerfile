# Backend Dockerfile (inside backend folder)
FROM node:20-alpine

WORKDIR /app

# Install backend dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copy all other files
COPY backend/ .

# Set the environment to production
ENV NODE_ENV=production

# Expose port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
