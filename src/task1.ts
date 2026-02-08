type TotalPriceArgs =
  | { price: number; discount: number; isInstallment: false; months?: never }
  | { price: number; discount: number; isInstallment: true; months: number };

export const totalPrice = (args: TotalPriceArgs): number => {
  const discounted = args.price * (1 - args.discount / 100);

  if (args.isInstallment) {
    return discounted / args.months;
  }

  return discounted;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);