# Portal

This project uses Node 20.x

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