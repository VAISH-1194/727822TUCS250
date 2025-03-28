import React from "react";

const User = ({ user }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">Company: {user.company.name}</p>
      <p className="text-gray-600">Posts: {user.posts ? user.posts.length : 0}</p>
    </div>
  );
};

export default User;
