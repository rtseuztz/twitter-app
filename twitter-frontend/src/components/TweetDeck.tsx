import { useQuery, gql } from '@apollo/client';

export default function TweetDeck() {

    const GET_TWEETS = gql`
        query Tweets {
        tweets {
            id
            text
            user {
            id
            name
            }
        }
        }
    `
    const { loading, error, data } = useQuery(GET_TWEETS);
    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error)
        return <p>Error :(</p>;
    }
    return data.tweets.map(({ id, text, user }: { id: string, text: string, user: { id: string, name: string } }) => (
        <div key={id}>
            <p>
                {text} - {user.name}
            </p>
        </div>
    ));

}