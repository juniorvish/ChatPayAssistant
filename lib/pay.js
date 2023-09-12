```javascript
import { SolanaPay } from 'solana-pay';

export const pay = async (amount, userAddress) => {
  try {
    const solanaPay = new SolanaPay({
      network: 'mainnet', // Use 'testnet' for testing
      privateKey: process.env.PRIVATE_KEY,
    });

    const transaction = await solanaPay.sendPayment({
      amount: amount,
      recipient: userAddress,
      asset: 'USDC',
    });

    return transaction;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};
```