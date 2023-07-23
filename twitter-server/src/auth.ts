import { Request, Response } from "express"
import { expressjwt } from "express-jwt"
import jwt from "jsonwebtoken"
import { getUserByEmail } from "./data/users.js"
const secretkey = "Zn85Q2Z/9QP0TFAvxxxxxmkwewjoqropdsf"
const secret = Buffer.from(secretkey, 'base64')
export const authMiddleware = expressjwt({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret,
})

export async function handleLogin(req: Request, res: Response) {
    const { email, password } = req.body
    const user = await getUserByEmail(email);
    if (!user || user.password !== password) {
        res.status(401).send("Wrong email or password")
        return
    } else {
        const claims = { sub: user.id, email: user.email }
        const token = jwt.sign(claims, secret)
        res.json({ token })
    }
}