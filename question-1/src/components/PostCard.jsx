export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{post.title}</h3>
      <p>{post.body}</p>
      <p className="text-sm text-gray-500 mt-2">
        {post.commentCount} comments • {post.date?.toLocaleDateString()}
      </p>
    </div>
  );
}