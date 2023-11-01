import React, { useEffect, useState } from "react";

const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      const data = await response.json();
      setAuthor(data);
    };

    fetchAuthor();
  }, [post.userId]);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {author && (
        <p>
          <strong>Author: </strong>
          {author.name} ({author.email})
        </p>
      )}
    </div>
  );
};

export default Post;
