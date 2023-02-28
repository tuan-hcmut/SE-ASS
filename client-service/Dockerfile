FROM node:alpine

WORKDIR /app
COPY package.json .
# --only-prod for npm
RUN yarn install --production
COPY . .

CMD ["yarn", "start"]