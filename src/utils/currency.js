const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const formatCurrency = (amount) => usd.format(Number(amount) || 0);
