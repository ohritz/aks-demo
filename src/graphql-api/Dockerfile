# --------- Dependencies layer --------------
FROM node:18-bullseye as dependencies
COPY --chown=1000:1000 ./package.json ./package-lock.json $HOME/
RUN npm install --omit=dev
ENV TINI_VERSION v0.19.0
USER 0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini && chown 1000:1000 /tini

# --------- Build layer --------------
FROM dependencies as build
COPY ./src/ $HOME/src/
COPY ./tsconfig.json ./.eslintrc.json ./.eslintignore ./
RUN npm ci
RUN npm run build

# --------- Runtime layer --------------
FROM node:18-bullseye-slim as runtime
LABEL maintainer="Sohan Fernando"
EXPOSE 3040
COPY --chown=1000:1000 --from=dependencies /tini /tini
ENTRYPOINT ["/tini", "--"]

COPY --chown=1000:1000 --from=dependencies $HOME/package.json $HOME/package.json
COPY --chown=1000:1000 --from=dependencies $HOME/node_modules $HOME/node_modules
COPY --chown=1000:1000 --from=build $HOME/dist $HOME
COPY --chown=1000:1000 ./config $HOME/config

USER 1000

CMD ["node", "index.js"]
