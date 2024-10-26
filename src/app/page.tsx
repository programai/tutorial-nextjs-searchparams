import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Exemplo de manipulação de URL</h1>
      <main>
        <ul>
          <li><Link href='/bugado'>Manipulação direto com Javascript</Link></li>
          <li><Link href='/correto'>Manipulação correta com useRouter</Link></li>
          <li><Link href='/server-side'>Manipulação no backend</Link></li>
        </ul>
      </main>
    </>
  );
}
