import Link from 'next/link';
import '../../../styles/global/global.css';
import NavBar from '../../../components/NavBar';

export default function Book() {
  return (
    <div>
      <NavBar />
      <nav>
        <Link href="/">
          Home
        </Link>
      </nav>
      <h1>Book Page</h1>
    </div>
  );
}
