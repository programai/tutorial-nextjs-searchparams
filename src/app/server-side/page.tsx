import { use } from 'react';

import FilterComp from './Filter';
import { loadProducts } from './product-service';
import ProductGrid from './ProductGrid';

type PageProps = {
  searchParams: Promise<{
    filter: string;
  }>;
};

export default function Page(props: PageProps) {
  const params = use(props.searchParams);
  const products = loadProducts(params.filter);

  return (
    <div>
      <h1>Produtos</h1>
      <FilterComp filter={params.filter}/>
      <ProductGrid products={products} />
    </div>
  );
}
