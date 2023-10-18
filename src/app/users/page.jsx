import Image from "next/image";
import getNewPost from "../libs/getNewPost";

export default async function UsersPage() {
  const posts = await getNewPost();
  return (
    <div className="w-full h-full bg-pink-500">
      <h1 className="text-white text-md lg:text-4xl text-center underline p-10">
        Top Stories
      </h1>
      <div>
        <div className=" border-b border-white grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 lg:grid-rows-1 p-4 gap-4">
          {posts?.articles.map((post, index) => {
            return (
              <div key={index} className="mb-6 w-full">
                <p className="text-black py-1 px-2 bg-slate-200">
                  Time Published: {post.publishedAt}
                </p>
                <div className="text-white my-4" key={index}>
                  <p className="text-md">Author: {post.author}</p>
                  <h1 className="py-3 hover:text-blue-800">
                    Title: {post.title}
                  </h1>

                  <div className="text-white w-full  ">
                    <img
                      src={post.urlToImage}
                      alt="urlimage"
                      className="w-full min-h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
