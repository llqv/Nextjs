// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

type Data = {
     message: string
}
export const config = {
     api: {
          bodyParser: false
     },
}
const proxy = httpProxy.createProxyServer()
export default function handler(
     req: NextApiRequest,
     res: NextApiResponse<Data>
) {
     return new Promise(resolve => {
          if (req.method != "POST") {
               res.status(404).json({ message: 'method not supported' })
          }
          //dont'send cookie to API server
          req.headers.cookie = ''
          const handlerLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
               let body = '';
               proxyRes.on('data', function (chunk) {
                    body += chunk
               });
               proxyRes.on('end', function () {
                    try {
                         const { accessToken, expiredAt } = JSON.parse(body)
                         // convert token to cookies
                         const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV != 'development' })
                         cookies.set('access_token', accessToken, {
                              httpOnly: true,
                              sameSite: 'lax',
                              expires: new Date(expiredAt)
                         })

                              ; (res as NextApiResponse).status(200).json({ message: 'login Successfully' })
                    } catch (error) {
                         ; (res as NextApiResponse).status(500).json({ message: 'something went wrong' })
                    }
                    resolve(true)
               })
          }
          proxy.once('proxyRes', handlerLoginResponse)
          proxy.once('proxyRes', () => {
               resolve(true)
          })
          proxy.web(req, res, {
               target: process.env.API_URL,
               changeOrigin: true,
               selfHandleResponse: true
          })
          //   res.status(200).json({ name: 'PATH-MATH all here' })

     })

}
