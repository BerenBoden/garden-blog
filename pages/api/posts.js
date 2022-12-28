import { getSession } from "next-auth/react"

export default async function handler(req, res) {
    const session = await getSession({ req })

    console.log(session)

    if(req.method === 'POST'){
        res.status(200).json({name: 'John Doe'})
    }else {
        console.log('no post')
    }
}