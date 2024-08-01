##--------- Stage: builder  ---------##

FROM registry1.dso.mil/ironbank/opensource/nodejs/debian/nodejs:20.16.0 AS builder

ARG ENV=development

WORKDIR /app

COPY --chown=node:node yarn.lock *.json *.mjs *.ts *.js ./
COPY --chown=node:node src/ src/
COPY --chown=node:node public/ public/
COPY --chown=node:node scripts/ scripts/
COPY --chown=node:node .storybook/ .storybook/

USER node

RUN echo "Building with env set to $PIPELINE_ENV"

ENV PIPELINE_ENV=$ENV

COPY --chown=node:node .env.${PIPELINE_ENV} ./

RUN yarn install --frozen-lockfile

RUN yarn build-prep \
    && yarn build

ENV NEXT_TELEMETRY_DISABLED=1

##--------- Stage: runner ---------##
# Final image

FROM registry1.dso.mil/ironbank/opensource/nodejs/debian/nodejs:20.16.0 AS runner

WORKDIR /app

# copy application build artifacts
COPY --chown=node:node --from=builder /app /app

ARG BUILD
ENV BUILD_ID=${BUILD}

USER node

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED=1

CMD ["-r","./startup/index.js", "node_modules/.bin/next", "start"]