// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { clientService } from "../../grpc/main"

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    clientService.ping()
        .then(console.log)
        .catch(console.log)
    res.status(200).json({ name: 'John Doe' })
}
