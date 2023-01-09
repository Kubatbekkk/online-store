// eslint-disable-next-line import/prefer-default-export
export const numFormat = new Intl.NumberFormat('en-EN', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 1,
});
