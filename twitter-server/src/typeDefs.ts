import { GraphQLSchema } from "graphql"

const typeDefs = `#graphql

type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  name: String
  email: String
  # books: [Book]
  friends: [User]
}

# type AddTweetMutationResponse {
#   code: String!
#   success: Boolean!
#   message: String!
#   book: Book
# }

# type Mutation {
#   addBook(title: String, author: String): AddBookMutationResponse
# }
`
export default typeDefs