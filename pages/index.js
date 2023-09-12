```javascript
import { useState } from 'react';
import ChatBox from '../components/ChatBox';
import PaymentModal from '../components/PaymentModal';
import BalanceDisplay from '../components/BalanceDisplay';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handleTopUp = (amount) => {
    setBalance(balance + amount);
    setPaymentModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>ChatPayAssistant</h1>
        <BalanceDisplay balance={balance} />
        <button onClick={() => setPaymentModalOpen(true)}>Top Up</button>
      </header>
      <main className={styles.main}>
        <ChatBox balance={balance} setBalance={setBalance} />
      </main>
      {isPaymentModalOpen && (
        <PaymentModal onTopUp={handleTopUp} onClose={() => setPaymentModalOpen(false)} />
      )}
    </div>
  );
}
```