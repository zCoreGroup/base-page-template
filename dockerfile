##--------- Stage: builder  ---------##

FROM registry1.dso.mil/ironbank/opensource/nodejs/debian/nodejs:20.15.0 AS builder

ARG ENV

WORKDIR /app

COPY --chown=node:node portal/ ./

USER node

RUN echo "Building with node env set to $ENV"

ENV NODE_ENV=$ENV

RUN yarn install --frozen-lockfile

RUN yarn build-prep \
    && yarn build

ENV NEXT_TELEMETRY_DISABLED 1

##--------- Stage: runner ---------##
# Final image

FROM registry1.dso.mil/ironbank/opensource/nodejs/debian/nodejs:20.15.0 AS runner

WORKDIR /app

# copy application build artifacts
COPY --chown=node:node --from=builder /app /app

ARG BUILD
ENV BUILD_ID=${BUILD}

USER node

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["-r","./startup/index.js", "node_modules/.bin/next", "start"]