FROM node:19-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm install

CMD ["sh", "-c", "npm run build && npm run preview"]