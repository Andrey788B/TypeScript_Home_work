type TotalPriceArgs =
  | { price: number; discount: number; isInstallment: false; months?: number }
  | { price: number; discount: number; isInstallment: true;  months: number };

export const totalPrice = ({ price, discount, isInstallment, months }: TotalPriceArgs): number => {
  const discounted = price * (1 - discount / 100);
  return isInstallment ? discounted / months! : discounted;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); 