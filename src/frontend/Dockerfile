# --------- Dependencies layer --------------
FROM node:18-bullseye as dependencies
WORKDIR /app
COPY --chown=1001:1001 ./package.json ./package-lock.json ./
RUN npm ci
ENV TINI_VERSION v0.19.0
USER 0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini && chown 1001:1001 /tini

# --------- Build layer --------------
FROM dependencies as builder
ARG NEXT_PUBLIC_GRAPHQL_API_URL
ARG NEXT_PUBLIC_SERVER_GRAPHQL_API_URL
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --------- Runtime layer --------------
FROM node:18-bullseye as runtime
LABEL maintainer="Sohan Fernando"
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --chown=1001:1001 --from=dependencies /tini /tini
ENTRYPOINT ["/tini", "--"]

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3050
ENV PORT 3050

CMD ["node", "server.js"]
