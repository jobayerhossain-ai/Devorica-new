import { useState, useEffect } from 'react';

const FALLBACK_RATE = 123; // 1 USD = 123 BDT (July 2026 market rate)

export function useCurrencyRate() {
  const [rate, setRate] = useState(FALLBACK_RATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem('usd_bdt_rate');
    if (cached) {
      setRate(parseFloat(cached));
      setLoading(false);
      return;
    }
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(r => r.json())
      .then(data => {
        const r = data?.rates?.BDT;
        if (r) {
          setRate(r);
          sessionStorage.setItem('usd_bdt_rate', String(r));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const toUSD = (bdt) => Math.round(bdt / rate);
  const toBDT = (usd) => Math.round(usd * rate);

  return { rate, loading, toUSD, toBDT };
}
