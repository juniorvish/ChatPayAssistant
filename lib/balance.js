```javascript
import { SolanaPay } from 'solana-pay';

export const getBalance = async (userAddress) => {
  try {
    const solanaPay = new SolanaPay();
    const balance = await solanaPay.getBalance(userAddress);
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};

export const topUp = async (userAddress, amount) => {
  try {
    const solanaPay = new SolanaPay();
    const transaction = await solanaPay.topUp(userAddress, amount);
    return transaction;
  } catch (error) {
    console.error('Error topping up:', error);
    throw error;
  }
};
```