import { SolanaPay } from 'solana-pay';
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    const { amount } = req.body;

    try {
      const payment = new SolanaPay({
        secret: process.env.SOLANA_SECRET,
        publicKey: process.env.SOLANA_PUBLIC_KEY,
      });

      const transaction = await payment.send({
        to: session.user.email,
        amount: amount,
        currency: 'USDC',
      });

      res.status(200).json({ success: true, transaction });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
}