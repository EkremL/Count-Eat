// SideBar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link bileşenini doğru şekilde içe aktardığınızdan emin olun
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
  const [populerBlogs, setPopulerBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopulerBlogs(data.slice(0, 15)));
  }, []);

  return (
    <div>
      <div className="bg-green-700 text-slate-100 p-3 rounded-xl">
        <h3 className="text-2xl font-semibold px-16">Popüler Yazılarımız</h3>
        <div>
          {populerBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blogs/${blog.id}`}
                key={blog.id}
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1 text-slate-100"
              >
                Daha Fazlası
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
