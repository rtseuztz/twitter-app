import TweetDeck from "../components/TweetDeck";

export default function Root() {
    return (
        <>
            <h1>Twitter</h1>
            <a href="/login">Login</a>
            <TweetDeck></TweetDeck>
        </>
    );
}