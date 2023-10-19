"use client";
import { useEffect, useState } from "react";
import kalay from "public/kalay.jpg";
import christin from "public/christin.jpg";
import Image from "next/image";
import BlogCardDetails from "./components/BlogCardDetails";
import BlogCardBottomDetails from "./components/BlogCardBottomDetails";
import Link from "next/link";
import CategoryFilter from "./components/CategoryFilter";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");

  const categories = [
    { id: 1, name: "apple" },
    { id: 2, name: "tesla" },
  ];

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${selectedCategory}&apiKey=150c432dd7f74f579722ea083695aede`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
        setfilteredData(data.articles);
      });
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setselectedCategory(category);

    // const filtered = data?.filter((item) => item.category === selectedCategory);
    //
  };

  return (
    <div className="flex flex-col">
      <div className=" text-white border border-white border-t-0 border-r-0 border-l-0 w-full h-32 flex items-center justify-center ">
        <h1 className=" text-4xl md:text-7xl lg:text-8xl font-extrabold">
          THE BLOG
        </h1>
      </div>
      <section className="flex lg:flex-row flex-col py-8 gap-8 lg:gap-2 h-[82rem] sm:h-[60rem]  lg:h-[30rem]">
        <div className="lg:w-[50%] w-full p-4">
          <div className="w-full h-[15rem]">
            <Image src={kalay} className="w-full h-full object-cover" />
          </div>

          <h1 className="text-white text-2xl font-bold my-8">
            Your trusted source for breaking news, analysis, exclusive
            interviews, headlines, and videos at ABCNews.com.
          </h1>
          <Link
            href="/users"
            className="text-white bg-pink-500 p-4 rounded-full font-bold"
          >
            Go to Top Stories
          </Link>
        </div>
        <div className="flex flex-col w-full lg:w-[50%] lg:h-[30rem] px-4 border border-white border-b-0 border-r-0 border-l-0 lg:border-none mt-8 lg:mt-0">
          <p className="text-pink-500 text-xl mt-2 lg:text-3xl lg:mt-0">
            Trending Now
          </p>

          <BlogCardDetails
            src={christin}
            height={100}
            width={200}
            title="Nvidia Stock Is Surging. Its Earnings Cleared Up Concerns Including China. - Barron's "
            timePosted={"25 June 2023"}
          />
          <BlogCardDetails
            src={christin}
            height={100}
            width={200}
            title="Brics to admit six new countries to bloc including Iran and Saudi Arabia - The Guardian"
            timePosted={"10 April 2023"}
          />
          <BlogCardDetails
            src={christin}
            height={100}
            width={200}
            title="China and India's Moon Rovers Take Different Paths on Historic Missions - Bloomberg"
            timePosted={"14 March 2023"}
          />
        </div>
      </section>

      {/* Search bar For Filtering Results */}
      <div className=" bg-white mt-0 lg:mt-20">
        <div className="text-black font-bold text-2xl px-4 py-6">
          <div className="text-black">
            <div>
              <form className="flex  rounded-md py-3 px-2 mt-4 w-full shadow-md ">
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </form>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  w-full mb-12">
          {filteredData?.map((data, index) => {
            return (
              <Link href="/users" className="hover:text-blue-700" key={index}>
                <BlogCardBottomDetails
                  src={data.urlToImage}
                  alt={data.title}
                  title={data.title}
                  timePosted={data.publishedAt}
                />
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import kalay from "public/kalay.jpg";
// import christin from "public/christin.jpg";
// import Image from "next/image";
// import BlogCardDetails from "./components/BlogCardDetails";
// import BlogCardBottomDetails from "./components/BlogCardBottomDetails";
// import Link from "next/link";
// import CategoryFilter from "./components/CategoryFilter";

// export default function Home() {
//   const [data, setData] = useState([]);
//   const [filteredData, setfilteredData] = useState([]);
//   const [selectedCategory, setselectedCategory] = useState("");

//   const categories = [
//     { id: 1, name: "apple" },
//     { id: 2, name: "tesla" },
//   ];

//   useEffect(() => {
//     fetch(
//       `https://newsapi.org/v2/everything?q=${selectedCategory}&apiKey=150c432dd7f74f579722ea083695aede`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data.articles);
//         setfilteredData(data.articles);
//       });
//   }, [selectedCategory]);

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setfilteredData(filteredData.filter((f) => f.includes(category)));
//     // setselectedCategory(category);

//     // if (category === "tesla" || category === "apple") {
//     //   setfilteredData(data);
//     // } else {
//     //   const filtered = data?.filter(
//     //     (item) => item.category === selectedCategory
//     //   );
//     //   setfilteredData(filtered);
//     // }
//   };

//   return (
//     <div className="flex flex-col">
//       <div className=" text-white border border-white border-t-0 border-r-0 border-l-0 w-full h-32 flex items-center justify-center ">
//         <h1 className=" text-4xl md:text-7xl lg:text-8xl font-extrabold">
//           THE BLOG
//         </h1>
//       </div>
//       <section className="flex lg:flex-row flex-col py-8 gap-8 lg:gap-2 h-[82rem] sm:h-[60rem]  lg:h-[30rem]">
//         <div className="lg:w-[50%] w-full p-4">
//           <div className="w-full h-[15rem]">
//             <Image src={kalay} className="w-full h-full object-cover" />
//           </div>

//           <h1 className="text-white text-2xl font-bold my-8">
//             Your trusted source for breaking news, analysis, exclusive
//             interviews, headlines, and videos at ABCNews.com.
//           </h1>
//           <Link
//             href="/users"
//             className="text-white bg-pink-500 p-4 rounded-full font-bold"
//           >
//             Go to Top Stories
//           </Link>
//         </div>
//         <div className="flex flex-col w-full lg:w-[50%] lg:h-[30rem] px-4 border border-white border-b-0 border-r-0 border-l-0 lg:border-none mt-8 lg:mt-0">
//           <p className="text-pink-500 text-xl mt-2 lg:text-3xl lg:mt-0">
//             Trending Now
//           </p>

//           <BlogCardDetails
//             src={christin}
//             height={100}
//             width={200}
//             title="Nvidia Stock Is Surging. Its Earnings Cleared Up Concerns Including China. - Barron's "
//             timePosted={"25 June 2023"}
//           />
//           <BlogCardDetails
//             src={christin}
//             height={100}
//             width={200}
//             title="Brics to admit six new countries to bloc including Iran and Saudi Arabia - The Guardian"
//             timePosted={"10 April 2023"}
//           />
//           <BlogCardDetails
//             src={christin}
//             height={100}
//             width={200}
//             title="China and India's Moon Rovers Take Different Paths on Historic Missions - Bloomberg"
//             timePosted={"14 March 2023"}
//           />
//         </div>
//       </section>

//       {/* Search bar For Filtering Results */}
//       <div className=" bg-white mt-0 lg:mt-20">
//         <div className="text-black font-bold text-2xl px-4 py-6">
//           <div className="text-black">
//             <div>
//               <form className="flex  rounded-md py-3 px-2 mt-4 w-full shadow-md ">
//                 <CategoryFilter
//                   categories={categories}
//                   selectedCategory={selectedCategory}
//                   onCategoryChange={handleCategoryChange}
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//         <section className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  w-full mb-12">
//           {filteredData &
//             filteredData?.map((data, index) => {
//               return (
//                 <Link href="/users" className="hover:text-blue-700" key={index}>
//                   <BlogCardBottomDetails
//                     src={data.urlToImage}
//                     alt={data.title}
//                     title={data.title}
//                     timePosted={data.publishedAt}
//                   />
//                 </Link>
//               );
//             })}
//         </section>
//       </div>
//     </div>
//   );
// }
