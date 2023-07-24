
import type { CodegenConfig } from '@graphql-codegen/cli';
import typeDefs from './src/typeDefs.js';
const config: CodegenConfig = {
  overwrite: true,
  schema: typeDefs,
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    },
    "../twitter-frontend/src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
