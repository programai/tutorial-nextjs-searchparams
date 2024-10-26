'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [filter, setFilter] = useState('all');

  // Manipulação direta do URL quando o filtro é alterado
  const updateURL = (newFilter: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('filter', newFilter);
    window.history.pushState({}, '', url);
    setFilter(newFilter); // Atualiza o estado local
  };

  useEffect(() => {
    // Exemplo: Acessa o valor inicial do filtro da URL
    const params = new URLSearchParams(window.location.search);
    const initialFilter = params.get('filter') || 'all';
    setFilter(initialFilter);
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <select onChange={(e) => updateURL(e.target.value)} value={filter}>
        <option value="all">Todos</option>
        <option value="eletronicos">Eletrônicos</option>
        <option value="livros">Livros</option>
      </select>
      <p>Filtro atual: {filter}</p>
    </div>
  );
};

export default Page;
