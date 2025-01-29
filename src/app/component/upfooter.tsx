import Image from "next/image";
import post1 from "@/app/images/unsplash_tVEqStC2uz8.png";
import post2 from "@/app/images/unsplash_hHdHCfAifHU.png";
import post3 from "@/app/images/unsplash_dEGu-oCuB1Y.png";

export default function Lastdiv() {
  const posts = [
    {
      image: post1, // Directly assign the imported image
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: post2,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: post3,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="lg:mt-[-250px] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-500 text-sm font-semibold uppercase">
          Practice Advice
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Featured Posts
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <Image
                src={post.image} // Use the image directly
                alt={`Post ${index + 1}`}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                New
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-1">Google Trending New</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{post.description}</p>
              <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span>|</span>
                  <span>{post.comments}</span>
                </div>
                <a
                  href="#"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
