// pages/index.tsx

import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi calculadora</h1>
      <Link href="/calculator">
        <a>Ir a la calculadora</a>
      </Link>
    </div>
  );
};

export default Home;
