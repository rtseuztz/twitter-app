import DataLoader from "dataloader";

export interface User {
    id: string;
    email: string;

}
export interface UserWithPassword extends User {
    password: string;
}
export async function getUser(id: string): Promise<User | undefined> {
    return {
        id: "1",
        email: "asdsa"
    }
}
export async function getUserByEmail(email: string): Promise<UserWithPassword | undefined> {
    return {
        id: "1",
        email: "ball@gmail.com",
        password: "ball12"
    }
}
export function createUserLoader() {
    return new DataLoader<string, User>(async (ids: string[]) => {
        //load all the users
        //use mock data now
        return new Promise((resolve, reject) => {
            const users: User[] = ids.map(id => {
                return {
                    id,
                    email: id + "@gmail.com",
                    name: `user ${id}`
                }
            })
            resolve(users)
        })
    })
}