import React from "react";

const PostPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts);

  return (
    <div className="w-full">
      <h2 className="text-2xl">Total post: {posts.length} </h2>

      {posts.map((post) => (
        <div
          key={post.id}
          className="card bg-primary my-5 text-primary-content w-[70%] mx-auto"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p> Likes : {post.likesCount}</p>
            <div className="card-actions justify-end">
              <button className="btn">See More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
