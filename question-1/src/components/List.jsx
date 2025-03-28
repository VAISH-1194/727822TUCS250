import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./UserCard";

const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error in fetching users :( ");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default List;
