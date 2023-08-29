# --------- Dependencies layer --------------
FROM node:18-bullseye as dependencies
WORKDIR /app
COPY --chown=1000:1000 ./package.json ./package-lock.json ./
RUN npm install --omit=dev
ENV TINI_VERSION v0.19.0
USER 0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini && chown 1000:1000 /tini

# --------- Build layer --------------
FROM dependencies as build
WORKDIR /app
COPY ./src/ /app/src/
COPY ./tsconfig.json ./.eslintrc.json ./.eslintignore ./
RUN npm ci
RUN npm run build

# --------- Runtime layer --------------
FROM node:18-bullseye-slim as runtime
LABEL maintainer="Sohan Fernando"
EXPOSE 3040
WORKDIR /app

COPY --chown=1000:1000 --from=dependencies /tini /tini
ENTRYPOINT ["/tini", "--"]

COPY --chown=1000:1000 --from=dependencies /app/package.json /app/package.json
COPY --chown=1000:1000 --from=dependencies /app/node_modules /app/node_modules
COPY --chown=1000:1000 --from=build /app/dist /app/dist
COPY --chown=1000:1000 ./config /app/config

USER 1000

CMD ["node", "/app/dist/index.js"]
