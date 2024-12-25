import React from "react";
import { Link } from "react-router";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* Breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* Intro */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div className="">
          <h1 className="text-2xl text-gray-800 md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-3 text-md md:text-xl md:mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            vero!
          </p>
        </div>
        {/* write */}
        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin-slow"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="bg-blue-800 items-center justify-center rounded-full w-20 h-20 p-2 absolute top-0 left-0 right-0 bottom-0 m-auto">
            <img src="/write.svg" alt="write" className="object-cover" />
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCategories />
      {/* Featured */}
      <FeaturedPosts />
      {/* PostList */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
