# --------- Dependencies layer --------------
FROM node:18-bullseye as dependencies
WORKDIR /app
COPY --chown=1000:1000 ./package.json ./package-lock.json ./
RUN npm install --omit=dev
ENV TINI_VERSION v0.19.0
USER 0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini && chown 1000:1000 /tini

# --------- Runtime layer --------------
FROM node:18-bullseye-slim as runtime
LABEL maintainer="Sohan Fernando"
EXPOSE 3000
COPY --chown=1000:1000 --from=dependencies /tini /tini
ENTRYPOINT ["/tini", "--"]

WORKDIR /app

COPY --chown=1000:1000 --from=dependencies /app/node_modules ./node_modules
COPY --chown=1000:1000 ./ ./

USER 1000

CMD ["node", "index.js"]
