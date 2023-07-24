import { GraphQLSchema } from "graphql"

const typeDefs = `#graphql

type Query {
  user(id: ID!): User
  tweets: [Tweet!]
}

type User {
  id: ID!
  name: String
  email: String
  # books: [Book]
  friends: [User]
  tweets: [Tweet!]
}
type Tweet {
  id: ID!
  text: String
  user: User
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