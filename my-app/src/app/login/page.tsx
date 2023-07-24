'use client'
export default function login() {

    async function formSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        const res = await fetch(`${process.env.SERVER_URL}/login`, {
            method: 'POST',
            credentials: "include",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(await res.json())
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </>
    )
}