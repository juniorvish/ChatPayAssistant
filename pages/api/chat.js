import { getSession } from 'next-auth/client';
import { chatWithAI } from '../../lib/chat';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (req.method === 'POST') {
    const { userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: 'Missing user message' });
    }

    try {
      const aiResponse = await chatWithAI(userMessage);
      return res.status(200).json({ aiResponse });
    } catch (error) {
      return res.status(500).json({ error: 'Error chatting with AI' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}