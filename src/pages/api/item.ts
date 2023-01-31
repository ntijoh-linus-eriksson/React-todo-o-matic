// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  item : string
} | string

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const requestMethod = req.method;
  const body = JSON.parse(req.body);
  switch (requestMethod) {
    case 'POST':
      res.status(200).json({ item: `brevlåda: ${body}` })
      
    // handle other HTTP methods
    default:
    res.status(200).json( 'Hittade inte den saken' )

}}
