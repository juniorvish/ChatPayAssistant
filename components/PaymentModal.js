```jsx
import { useState } from 'react';
import { useSolanaPay } from '../lib/pay.js';

export default function PaymentModal() {
  const [amount, setAmount] = useState('');
  const { payWithSolana } = useSolanaPay();

  const handleTopUp = async () => {
    if (amount) {
      await payWithSolana(amount);
      setAmount('');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Top Up Your Balance</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in USDC"
          className="input"
        />
        <button onClick={handleTopUp} className="button">
          Top Up
        </button>
      </div>
    </div>
  );
}
```