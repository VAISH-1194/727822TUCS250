import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center gap-6">
      <Link to="/" className="text-white hover:underline">Top Users</Link>
      <Link to="/trending" className="text-white hover:underline">Trending</Link>
      <Link to="/feed" className="text-white hover:underline">Feed</Link>
    </nav>
  );
}