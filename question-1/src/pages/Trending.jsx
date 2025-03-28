import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

export default function Trending() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        
        const postsWithComments = res.data.map(post => ({
          ...post,
          commentCount: Math.floor(Math.random() * 500) 
        }));
        
        const maxComments = Math.max(...postsWithComments.map(p => p.commentCount));
        const trendingPosts = postsWithComments.filter(p => p.commentCount === maxComments);
        
        setPosts(trendingPosts);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}