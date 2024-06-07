import { useEffect, useState } from "react";
import BlogCards from "../BlogComponents/BlogHomeItems/BlogCards";
import Pagination from "../BlogComponents/BlogHomeItems/Pagination";
import CategorySelection from "../BlogComponents/BlogHomeItems/CategorySelection";
import SideBar from "../BlogComponents/BlogHomeItems/SideBar";

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0); // Toplam blog sayısı için state
  const pageSize = 9;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      let category = selectedCategory;
      let url = `http://localhost:5000/api/blogs?page=${currentPage}&limit=${pageSize}`;

      if (category) {
        url += `&category=${category}`;
      }

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.blogs);
          setTotalBlogs(data.totalBlogs);
        } else {
          console.error("Failed to fetch blogs:", response.status);
        }
      } catch (error) {
        console.error("An error occurred while fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="mx-14" id="okumaya-basla">
      <CategorySelection
        onSelectCategory={handleCategoryChange}
        selectedCategory={selectedCategory}
        activeCategory={activeCategory}
      />

      <div className="flex flex-col lg:flex-row gap-20">
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        <div>
          <SideBar />
        </div>
      </div>

      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalBlogs={totalBlogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogHome;
