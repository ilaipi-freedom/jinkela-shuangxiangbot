FROM node:18.16.1-alpine3.17 as base

WORKDIR /app

FROM base as prod

COPY package*.json ./

RUN npm install --omit=dev

FROM base as dev

COPY package*.json ./

RUN npm install

FROM dev as build

FROM base as release

COPY --from=prod /app/node_modules /app/node_modules/
COPY . ./

ENTRYPOINT ["node"]

CMD ["app.js"]
