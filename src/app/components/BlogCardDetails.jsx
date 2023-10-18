import Image from "next/image";

export default function BlogCardDetails({
  src,
  height,
  width,
  timePosted,
  title,
}) {
  return (
    <div className=" flex flex-row-reverse lg:flex-row  gap-6 py-3 border border-white border-t-0 border-r-0 border-l-0">
      <div className="w-30 h-28">
        <Image
          src={src}
          width={width}
          height={height}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-gray-100 text-sm ">{timePosted}</p>
        <h1 className="text-white text-xl font-bold ">{title}</h1>
      </div>
    </div>
  );
}
