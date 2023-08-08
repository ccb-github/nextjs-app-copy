import { type IProduct } from '#/lib/data/products';
import { ProductEstimatedArrival } from '#/ui/ProductEstimatedArrival';
import { ProductLowStockWarning } from '#/ui/ProductLowStockWarning';
import { ProductPrice } from '#/ui/ProductPrice';
import { ProductSplitPayments } from '#/ui/ProductSplitPayments';
import { ProductUsedPrice } from '#/ui/ProductUsedPrice';
import { dinero, type DineroSnapshot } from 'dinero.js';


const shimmer = `relative overflow-hidden rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

export function PricingSkeleton() {
  return (
    <div
      className={`h-[161px] space-y-4 rounded-lg bg-gray-800 ${shimmer}`}
    ></div>
  );
}

export default function Pricing({
  product,
  cartCount,
}: {
  product: IProduct;
  cartCount: number;
}) {
  const price = dinero(product.price as DineroSnapshot<number>);

  // Normally you would fetch data here
  

  return (
    <div className="space-y-4 rounded-lg bg-gray-900 p-3">
      <ProductPrice price={price} discount={product.discount} />
      <ProductSplitPayments price={price} />
      {product.usedPrice ? (
        <ProductUsedPrice usedPrice={product.usedPrice} />
      ) : null}
      <ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
      {product.stock <= 1 ? (
        <ProductLowStockWarning stock={product.stock} />
      ) : null}
     
    </div>
  );
}
