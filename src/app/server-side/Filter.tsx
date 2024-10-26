'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

type FilterProps = {
  filter: string;
};

function FilterComp({ filter }: FilterProps) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const updateFilter = (newFilter: string) => {
    const searchParams = new URLSearchParams(params);
    searchParams.set('filter', newFilter);

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <select onChange={(e) => updateFilter(e.target.value)} value={filter}>
        <option value="all">Todos</option>
        <option value="eletronicos">Eletrônicos</option>
        <option value="livros">Livros</option>
      </select>
      <p>Filtro atual: {filter}</p>
    </>
  );
};

export default FilterComp;
