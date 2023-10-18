import GetAllPost from "@/app/libs/getAllPosts";

export default async function Userpage({ params: { title } }) {
  const post = GetAllPost(title);

  return (
    <div>
      <h1 className="text-3xl text-white">user Information</h1>
      <p className="text-white">{post.name}</p>
    </div>
  );
}
