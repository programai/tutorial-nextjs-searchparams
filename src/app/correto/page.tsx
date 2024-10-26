'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [filter, setFilter] = useState('all');

  const updateFilter = (newFilter: string) => {    
    const searchParams = new URLSearchParams(params);
    searchParams.set('filter', newFilter);

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    const initialFilter = params.get('filter') || 'all';
    setFilter(initialFilter);
  }, [params]);

  return (
    <div>
      <h1>Produtos</h1>
      <select onChange={(e) => updateFilter(e.target.value)} value={filter}>
        <option value="all">Todos</option>
        <option value="eletronicos">Eletrônicos</option>
        <option value="livros">Livros</option>
      </select>
      <p>Filtro atual: {filter}</p>
    </div>
  );
}
