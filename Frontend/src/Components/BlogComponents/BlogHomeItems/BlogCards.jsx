// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaUser } from "react-icons/fa";
// import PropTypes from "prop-types";

// const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
//   const filteredBlogs = blogs
//     .filter((blog) => !selectedCategory || blog.category === selectedCategory)
//     .slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   return (
//     <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//       {filteredBlogs.map((blog) => (
//         <Link
//           to={`/blog/${blog._id}`}
//           key={blog._id} // blog._id kullanılmalı, id yerine
//           className="p-5 shadow-xl hover:shadow-2xl rounded cursor-pointer max-h-100"
//         >
//           <div>
//             <img src={blog.image} alt="" className="w-full" />
//           </div>
//           <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
//             {blog.title}
//           </h3>
//           <p className="mb-2 text-gray-600">
//             <FaUser className="inline-flex items-center mr-2" />
//             {blog.author}
//           </p>
//           <p className=" text-sm text-gray-500">{blog.published_date}</p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// BlogCards.propTypes = {
//   blogs: PropTypes.array.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   selectedCategory: PropTypes.string, // isteğe bağlı olarak string tipinde bir prop
//   pageSize: PropTypes.number.isRequired,
// };

// export default BlogCards;

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link
          to={`/blog/${blog._id}`}
          key={blog._id}
          className="p-5 shadow-xl hover:shadow-2xl rounded cursor-pointer max-h-100"
        >
          <div>
            <img src={blog.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p className=" text-sm text-gray-500">{blog.published_date}</p>
        </Link>
      ))}
    </div>
  );
};

BlogCards.propTypes = {
  blogs: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string,
  pageSize: PropTypes.number.isRequired,
};

export default BlogCards;
