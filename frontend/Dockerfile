FROM node:14.15.1-alpine3.10

WORKDIR /app
EXPOSE 3000
COPY package.json package-lock.json ./
RUN npm install
RUN npx next telemetry disable
COPY . .

CMD ["npx", "next"]
