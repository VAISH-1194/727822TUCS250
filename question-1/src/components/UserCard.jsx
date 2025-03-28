export default function UserCard({ user }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{user.name}</h3>
      <p>Posts: {user.postCount}</p>
    </div>
  );
}