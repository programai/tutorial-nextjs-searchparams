import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
