import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

export default function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const usersWithPosts = res.data.map(user => ({
          ...user,
          postCount: Math.floor(Math.random() * 100)
        })).sort((a, b) => b.postCount - a.postCount).slice(0, 5);
        
        setUsers(usersWithPosts);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}