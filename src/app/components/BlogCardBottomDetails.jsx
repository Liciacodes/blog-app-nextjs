import Image from "next/image";
export default function BlogCardBottomDetails({ timePosted, title, src, alt }) {
  return (
    <div className=" flex flex-col p-4 border-none lg:border-2 lg:border-gray-400 lg:border-t-0 lg:border-b-0 lg:border-l-0">
      <div className="w-full  h-[10rem]">
        {/* <Image
          src={src}
          width={width}
          height={height}
          className="w-full h-full object-cover"
        /> */}
        <img src={src} className="w-full h-full" alt={alt} />
      </div>

      <div>
        <p className="text-black text-sm my-2 font-bold">{timePosted}</p>
        <h1 className="text-black text-2xl font-bold my-6 hover:text-blue-700">
          {title}
        </h1>
        {/* <p className="text-black hidden font-bold lg:block">{text}</p> */}
        {/* <p className="hidden font-bold lg:block text-sm mt-5 text-blue-700">
          {url}
        </p> */}
      </div>
    </div>
  );
}
