import products from './products.json';

export function loadProducts(filter: string = 'all') {
  if (filter === 'all') {
    return products;
  }

  return products.filter((product) => product.cat === filter);
}
