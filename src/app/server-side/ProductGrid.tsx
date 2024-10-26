import React from 'react';

interface Product {
  cat: string;
  name: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>Category:</strong> {product.cat} - <strong>Name:</strong> {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductGrid;
