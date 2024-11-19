import React from 'react';
import Link from 'next/link';
import '../../styles/global/global.css';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/book">
          Book
        </Link>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
}
