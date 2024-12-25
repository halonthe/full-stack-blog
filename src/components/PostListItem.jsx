import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="haloblog/featured1.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          cumque.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Yuda Dwi Restika</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quasi vero voluptatibus laboriosam. Perspiciatis voluptas repellat sed
          quod dolorem facere cum similique? Totam, exercitationem minus.
        </p>
        <Link to="/test" className="underline text-blue-800">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;