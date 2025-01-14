FROM node:20-alpine

WORKDIR /app

COPY backend/package.json backend/package-lock.json ./
RUN npm install

COPY backend/ .

# Set the environment to production
ENV NODE_ENV=production

EXPOSE 5000

CMD ["npm", "start"]
