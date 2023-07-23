import { request, gql } from 'graphql-request'
import type { Book } from '../generated/graphql';
export const load = async () => {
    const document = gql`
  {
    books {
      title
    }
  }
    `
    const { books }: { books: Book[] } = await request(process.env.SERVER_URL!, document)
    return { books };
};