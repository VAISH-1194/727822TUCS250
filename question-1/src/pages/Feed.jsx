import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          const sortedPosts = res.data.map(post => ({
            ...post,
            date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
            commentCount: Math.floor(Math.random() * 100)
          })).sort((a, b) => b.date - a.date);
          
          setPosts(sortedPosts);
        });
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}