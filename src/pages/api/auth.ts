import { NextApiRequest, NextApiResponse } from 'next';

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password }: LoginData = req.body;

  // TODO: implement login logic

  const token: string = 'some_token';

  res.status(200).json({ token });
}
