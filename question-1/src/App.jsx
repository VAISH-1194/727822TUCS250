// import React from "react";
// import List from "./components/List";

// const App = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <List />
//     </div>
//   );
// };

// export default App;




import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import TopUsers from './pages/TopUsers';
import Trending from './pages/Trending';
import Feed from './pages/Feed';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </div>
  );
}