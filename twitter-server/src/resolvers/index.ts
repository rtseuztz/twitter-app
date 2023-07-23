import { Resolvers } from "../generated/graphql.js"
import DataLoader from 'dataloader'
import { User } from "../data/users.js";
// Note this "Resolvers" type isn't strictly necessary because we are already
// separately type checking our queries and resolvers. However, the "Resolvers"
// generated types is useful syntax if you are defining your resolvers
// in a single file.
const resolvers: Resolvers = {
    Query: {
        user: async (parent, { id }, { userLoader }) => {
            const user: User = await userLoader.load(id)
            return user
        },
    },
    User: {

    }
};

export interface ResolverContext {
    userLoader: DataLoader<string, User, string>;
    user?: User
}

export default resolvers;
