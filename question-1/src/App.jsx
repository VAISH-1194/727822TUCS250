import React from "react";
import User from "./components/User";

const App = () => {
  const testUser = {
    name: "Anonymouos",
    posts: ["Post-1", "Post-2", "Post-3"],
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">User Cards</h1>
      <User user={testUser} />
    </div>
  );
};

export default App;
