import { getSession } from 'next-auth/client';
import { getUserBalance } from '../../lib/balance';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const balance = await getUserBalance(session.user.email);
    return res.status(200).json({ balance });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch balance' });
  }
}