import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4"
import cors from "cors";
import { readFileSync } from "fs";
import express from "express";
import { authMiddleware, handleLogin } from "./auth.js";
import resolvers, { ResolverContext } from "./resolvers/index.js";
import { createUserLoader, getUser } from "./data/users.js";
import typeDefs from "./typeDefs.js";

const app = express()
app.use(cors(), express.json(), authMiddleware)
app.post("/login", handleLogin)

// const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

async function getContext({ req }): Promise<ResolverContext> {
    const userLoader = createUserLoader()
    const context: ResolverContext = { userLoader }
    if (req.auth) {
        context.user = await getUser(req.auth.sub)
    }
    return context;
}
const apolloServer = new ApolloServer({ typeDefs, resolvers })
await apolloServer.start()
app.use('/graphql', apolloMiddleware(apolloServer, { context: getContext }))

app.listen(3001, () => {
    console.log("Server is running on port 3001")
    console.log(`GraphQL endpoint: localhost:3001/graphql`)
})