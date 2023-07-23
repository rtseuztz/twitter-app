import { request, gql } from 'graphql-request'
import { SERVER_URL } from '$env/static/private'
import type { Book } from '../generated/graphql';
export const load = async () => {
    const document = gql`
  {
    books {
      title
    }
  }
    `
    const { books }: { books: Book[] } = await request(SERVER_URL, document)
    return { books };
};