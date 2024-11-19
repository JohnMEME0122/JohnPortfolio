import React from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <nav>
        <Link href="/book">
          Book
        </Link>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
}
