const User = ({ user }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p>Posts: {user.posts.length}</p>
      </div>
    );
  };
  
  export default User;
  