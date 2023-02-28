// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  users: any[]
} | {name:string}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
     if (req.method != "GET") {
          res.status(401).json({name:'method not supported'})
     }
     const response = await fetch('http://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10')
     const responseJSON = await response.json()
  res.status(200).json(responseJSON)
}
