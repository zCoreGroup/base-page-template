# Portal

This project uses Node 20.x

### Building the Portal
1. [Local](#local)
2. [Docker](#docker)
3. [Gravity](#gravity)

## Local
Guide for local development, building, testing.

### Install
Run the following to set up the application locally:
```bash
yarn install
```

### Build
```bash
yarn build
```

### Development Mode

Create a `.env.local` that looks like the following:
```
DIRECTUS_URL=http://placeholder
DIRECTUS_STATIC_TOKEN=your-static-token
```
Then run
```bash
yarn dev
```

### Unit tests
```bash
yarn test
```

### Lint
```bash
yarn lint
```

## API Docs
API docs can be viewed by navigating to `/docs`.

The schema must be regenerated everytime a change to `src/types.js` is made otherwise the docs will not be accurate.

The following command can be run:

```bash
yarn generate:schema
```

## Docker

Building the portal with docker copies files from the `/portal` directory with environment variables set via `.env`. This 
file is created from `.env.[pipeline environemtn]`. This is set with `NODE_ENV` and `yarn build-prep`. This requires a `.env` 
to be created for each environment supported.

Only test is supported at this time for a `.env` file source.

```bash
docker build --target [`builder | runner`] --build-arg [ENV=`test | production`] -t [`optional tag`] .
```

## Gravity

Auth

TODO setup intercept for header jwt from P1 and pull the data from it. Hitting the Gravity/P1 url should automatically trigger auth login and then attach the jwt to the header of future requests (until time out). Uplink has a repo that simulates that last part from the frontend to the backend.