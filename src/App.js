import React from "react";
import PostList from "./components/Postlist";
import Post from "./components/Post";

const App = () => {
  return (
    <div className="App">
      <h1>Post List</h1>
      <PostList />
    </div>
  );
};

export default App;
