import DataLoader from "dataloader"
export interface Tweet {
    id: string;
    text: string;
    userId: string;
}

export function getTweets(): Promise<Tweet[]> {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: "1",
                text: "Hello world",
                userId: "1"
            }, {
                id: "2",
                text: "whats good",
                userId: "2"
            }
        ])
    })
}

export function createTweetsLoader() {
    return new DataLoader<string, Tweet>(async (ids: string[]) => {
        //load all the users
        //use mock data now
        console.log('loading')
        return new Promise((resolve, reject) => {
            const tweets: Tweet[] = ids.map(id => {
                return {
                    id,
                    text: "Hello world",
                    userId: "1"
                }
            })
            resolve(tweets)
        })
    })
}