import { useState, useMemo } from "react";
import { GrFormClose } from "react-icons/gr";
import Foods from "../../../echo.json";
// const products = [
//   {
//     id: 1,
//     Category: "Electronics",
//     Company: "Apple",
//     Product: "iPhone 13",
//     Description: "The latest iPhone with advanced features",
//     Price: 999,
//     CustomDetails: [
//       {
//         Date: "2023-09-05",
//         Customer: "John Doe",
//         Quantity: 2,
//         TotalAmount: 1998,
//       },
//       {
//         Date: "2023-09-04",
//         Customer: "Jane Smith",
//         Quantity: 1,
//         TotalAmount: 999,
//       },
//     ],
//   },
//   {
//     id: 2,
//     Category: "Clothing",
//     Company: "Nike",
//     Product: "Running Shoes",
//     Description: "High-quality running shoes for athletes",
//     Price: 89,
//     CustomDetails: [
//       {
//         Date: "2023-09-05",
//         Customer: "Alice Johnson",
//         Quantity: 3,
//         TotalAmount: 267,
//       },
//       {
//         Date: "2023-09-03",
//         Customer: "Bob Brown",
//         Quantity: 2,
//         TotalAmount: 178,
//       },
//     ],
//   },
//   {
//     id: 3,
//     Category: "Books",
//     Company: "Penguin Books",
//     Product: "The Great Gatsby",
//     Description: "Classic novel by F. Scott Fitzgerald",
//     Price: 12,
//     CustomDetails: [
//       {
//         Date: "2023-09-02",
//         Customer: "Ella Williams",
//         Quantity: 5,
//         TotalAmount: 60,
//       },
//     ],
//   },
//   {
//     id: 4,
//     Category: "Home Appliances",
//     Company: "Samsung",
//     Product: "Smart Refrigerator",
//     Description: "Refrigerator with smart features and spacious design",
//     Price: 14,
//     CustomDetails: [
//       {
//         Date: "2023-09-05",
//         Customer: "David Wilson",
//         Quantity: 1,
//         TotalAmount: 14,
//       },
//     ],
//   },
//   {
//     id: 5,
//     Category: "Electronics",
//     Company: "Sony",
//     Product: "PlayStation 5",
//     Description: "Next-gen gaming console",
//     Price: 499,
//     CustomDetails: [
//       {
//         Date: "2023-09-06",
//         Customer: "Sarah Davis",
//         Quantity: 1,
//         TotalAmount: 499,
//       },
//     ],
//   },
//   {
//     id: 6,
//     Category: "Clothing",
//     Company: "Adidas",
//     Product: "Sneakers",
//     Description: "Stylish sneakers for everyday wear",
//     Price: 75,
//     CustomDetails: [
//       {
//         Date: "2023-09-07",
//         Customer: "Michael Lee",
//         Quantity: 2,
//         TotalAmount: 150,
//       },
//     ],
//   },
//   {
//     id: 7,
//     Category: "Electronics",
//     Company: "Samsung",
//     Product: "4K Smart TV",
//     Description: "High-quality 4K television with smart features",
//     Price: 799,
//     CustomDetails: [
//       {
//         Date: "2023-09-08",
//         Customer: "Sophia Anderson",
//         Quantity: 1,
//         TotalAmount: 799,
//       },
//     ],
//   },
//   {
//     id: 8,
//     Category: "Home Appliances",
//     Company: "LG",
//     Product: "Front-Load Washer",
//     Description: "Efficient front-load washing machine",
//     Price: 599,
//     CustomDetails: [
//       {
//         Date: "2023-09-09",
//         Customer: "William Taylor",
//         Quantity: 1,
//         TotalAmount: 599,
//       },
//     ],
//   },
//   {
//     id: 9,
//     Category: "Books",
//     Company: "HarperCollins",
//     Product: "To Kill a Mockingbird",
//     Description: "Classic novel by Harper Lee",
//     Price: 15,
//     CustomDetails: [
//       {
//         Date: "2023-09-10",
//         Customer: "Olivia Martinez",
//         Quantity: 3,
//         TotalAmount: 45,
//       },
//     ],
//   },
//   {
//     id: 10,
//     Category: "Clothing",
//     Company: "H&M",
//     Product: "Denim Jeans",
//     Description: "Stylish denim jeans for men and women",
//     Price: 49,
//     CustomDetails: [
//       {
//         Date: "2023-09-11",
//         Customer: "James Johnson",
//         Quantity: 2,
//         TotalAmount: 98,
//       },
//     ],
//   },
//   {
//     id: 11,
//     Category: "Electronics",
//     Company: "Sony",
//     Product: "Wireless Headphones",
//     Description: "High-quality wireless headphones with noise cancellation",
//     Price: 249,
//     CustomDetails: [
//       {
//         Date: "2023-09-12",
//         Customer: "Liam Jackson",
//         Quantity: 1,
//         TotalAmount: 249,
//       },
//     ],
//   },
//   {
//     id: 12,
//     Category: "Home Appliances",
//     Company: "KitchenAid",
//     Product: "Stand Mixer",
//     Description: "Powerful stand mixer for baking and cooking",
//     Price: 299,
//     CustomDetails: [
//       {
//         Date: "2023-09-13",
//         Customer: "Ava Harris",
//         Quantity: 1,
//         TotalAmount: 299,
//       },
//     ],
//   },
//   {
//     id: 13,
//     Category: "Books",
//     Company: "Random House",
//     Product: "The Catcher in the Rye",
//     Description: "Classic novel by J.D. Salinger",
//     Price: 10,
//     CustomDetails: [
//       {
//         Date: "2023-09-14",
//         Customer: "Noah Martinez",
//         Quantity: 4,
//         TotalAmount: 40,
//       },
//     ],
//   },
//   {
//     id: 14,
//     Category: "Clothing",
//     Company: "Zara",
//     Product: "Leather Jacket",
//     Description: "Stylish leather jacket for men and women",
//     Price: 129,
//     CustomDetails: [
//       {
//         Date: "2023-09-15",
//         Customer: "Sophia Wilson",
//         Quantity: 2,
//         TotalAmount: 258,
//       },
//     ],
//   },
//   {
//     id: 15,
//     Category: "Electronics",
//     Company: "Bose",
//     Product: "Bluetooth Speaker",
//     Description: "Portable Bluetooth speaker with excellent sound quality",
//     Price: 129,
//     CustomDetails: [
//       {
//         Date: "2023-09-16",
//         Customer: "Mason Davis",
//         Quantity: 3,
//         TotalAmount: 387,
//       },
//     ],
//   },
//   {
//     id: 16,
//     Category: "Books",
//     Company: "Simon & Schuster",
//     Product: "1984",
//     Description: "Dystopian novel by George Orwell",
//     Price: 14,
//     CustomDetails: [
//       {
//         Date: "2023-09-18",
//         Customer: "Lucas Taylor",
//         Quantity: 5,
//         TotalAmount: 70,
//       },
//     ],
//   },
//   {
//     id: 17,
//     Category: "Clothing",
//     Company: "Forever 21",
//     Product: "Summer Dress",
//     Description: "Casual summer dress for women",
//     Price: 29,
//     CustomDetails: [
//       {
//         Date: "2023-09-19",
//         Customer: "Aiden Brown",
//         Quantity: 4,
//         TotalAmount: 116,
//       },
//     ],
//   },
//   {
//     id: 18,
//     Category: "Electronics",
//     Company: "Microsoft",
//     Product: "Xbox Series X",
//     Description: "Next-gen gaming console by Microsoft",
//     Price: 499,
//     CustomDetails: [
//       {
//         Date: "2023-09-20",
//         Customer: "Luna Garcia",
//         Quantity: 1,
//         TotalAmount: 499,
//       },
//     ],
//   },
//   {
//     id: 19,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
//   {
//     id: 20,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
//   {
//     id: 21,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
//   {
//     id: 22,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
//   {
//     id: 23,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
//   {
//     id: 24,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
//   {
//     id: 25,
//     Category: "Home Appliances",
//     Company: "Cuisinart",
//     Product: "Coffee Maker",
//     Description: "Programmable coffee maker for coffee lovers",
//     Price: 69,
//     CustomDetails: [
//       {
//         Date: "2023-09-21",
//         Customer: "Eli Johnson",
//         Quantity: 2,
//         TotalAmount: 138,
//       },
//     ],
//   },
// ];
const FoodsTable = () => {
  // const [productList] = useState(products);
  const [foods] = useState(Foods.Ingredient);
  const [rowsLimit] = useState(20);
  const [rowsToShow, setRowsToShow] = useState(foods.slice(0, rowsLimit));
  const [customPagination, setCustomPagination] = useState([]);
  const [totalPage] = useState(Math.ceil(foods?.length / rowsLimit));
  const [currentPage, setCurrentPage] = useState(0);
  const [searchFood, setSearchFood] = useState("");
  // const dropdownRef = useRef(null);
  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = Foods.Ingredient.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };
  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = Foods.Ingredient.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };
  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = Foods.Ingredient.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };
  useMemo(() => {
    setCustomPagination(Array(Math.ceil(foods?.length / rowsLimit)).fill(null));
  }, [rowsLimit, foods?.length]);

  const handleClickCloseButton = (e) => {
    e.preventDefault();
    setSearchFood("");
  };

  const handleInputChange = (e) => {
    setSearchFood(e.target.value);
  };

  // console.log(searchFood);

  return (
    <div className=" min-h-screen h-full flex  items-center justify-center pt-2 pb-14 mx-8 ">
      <div className="w-full max-w-8xl px-2">
        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-full 2xl:max-w-none mt-2 rounded-lg flex">
          <div className="bg-white w-72 flex flex-col">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="default-search"
                  className="block w-52 p-2 mt-4 mb-4 mx-auto pl-4 text-xl text-black border border-gray-300 rounded-lg bg-white focus:ring-green-500 focus:border-green-500 dark:white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500 "
                  placeholder="Besin Ara..."
                  value={searchFood}
                  onChange={handleInputChange}
                />
                <button
                  onClick={handleClickCloseButton}
                  className="absolute inset-y-0 right-0 pr-6 flex items-center"
                >
                  <GrFormClose style={{ color: "grey" }} />
                </button>
              </div>
            </form>
            <div className="p-3">
              <p className="text-3xl">Tür</p>
              <ul className="mt-4 mb-4 ml-2 text-green-500 ">
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Tarifler
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Temel Besinler
                </li>
              </ul>
              <p className="text-3xl">Kategori</p>
              <ul className="mt-2 ml-2 text-green-500">
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Hepsi
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Ana Yemekler
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Çorbalar
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Et Yemekleri
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  İçecekler
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Kahvaltı
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Makarna
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Salatalar
                </li>
                <li className="mb-3 hover:text-green-700 cursor-pointer">
                  Tatlılar
                </li>
              </ul>
            </div>
          </div>
          <table className="table-auto overflow-scroll md:overflow-auto w-full   text-left font-inter border ">
            <thead className="rounded-lg text-base text-white font-semibold w-full ">
              <tr className="border-2 border-gray-300 ">
                <th className="px-3 py-1 text-[#212B36] w-16 sm:text-base font-bold border-2 border-gray-300 ">
                  Resim
                </th>
                <th className="px-3 py-1 text-[#212B36] w-2/12 sm:text-base font-bold border-2 border-gray-300 ">
                  İsim
                </th>
                <th className="px-3 py-1 text-green-500 w-2/12 sm:text-base font-bold border-2 border-gray-300">
                  Kalori
                </th>
                <th className="px-3 py-1 text-green-500 w-1/12 sm:text-base font-bold border-2 border-gray-300">
                  Karbonhidrat
                </th>
                <th className="px-3 py-1 text-green-500 w-1/12 first:sm:text-base font-bold border-2 border-gray-300">
                  Yağ
                </th>
                <th className="px-3 py-1 text-green-500 w-1/12 sm:text-base font-bold border-2 border-gray-300">
                  Protein
                </th>
                <th className="px-3 py-1 text-green-500 w-3/12 sm:text-base font-bold border-2 border-gray-300 ">
                  Lif
                </th>
              </tr>
            </thead>
            <tbody>
              {rowsToShow?.map((food) => (
                <tr className="bg-white hover:bg-slate-100" key={food.id}>
                  <td
                    className={`py-2 px-2 w-16 font-normal text-base border-2 whitespace-nowrap`}
                  >
                    <img
                      src={food?.img}
                      style={{
                        width: "200px",
                        height: "80px",
                        borderRadius: "5px",
                      }}
                      alt=""
                    />
                  </td>
                  <td
                    className={` text-green-600 font-semibold py-2 px-3 w-2/12 text-base border-b-2 whitespace-nowrap`}
                  >
                    {food?.Turkish_Name}
                  </td>
                  <td
                    className={`py-2 pl-6 w-2/12 font-normal text-base border-b-2 whitespace-nowrap`}
                  >
                    {food?.Calorie}
                  </td>
                  <td
                    className={`py-2 pl-6 text-base w-1/12 font-normal border-b-2 whitespace-nowrap`}
                  >
                    {food?.Carbohydrates + " g"}
                  </td>
                  <td
                    className={`py-2 pl-6 text-base w-1/12 font-normal border-b-2 whitespace-nowrap`}
                  >
                    {food?.Fat + " g"}
                  </td>
                  <td
                    className={`py-5 pl-6 text-base w-1/12 font-normal border-b-2`}
                  >
                    {food?.Protein + " g"}
                  </td>
                  <td
                    className={`py-5 pl-6 text-base font-normal w-3/12 border-b-2`}
                  >
                    {food?.Fiber + " g"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
          <div className="text-lg">
            Showing {currentPage == 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
            {currentPage == totalPage - 1
              ? Foods?.length
              : (currentPage + 1) * rowsLimit}{" "}
            of {Foods?.length} entries
          </div>
          <div className="flex">
            <ul
              className="flex justify-center items-center gap-x-[10px] z-30"
              role="navigation"
              aria-label="Pagination"
            >
              <li
                className={` prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${
                  currentPage == 0
                    ? "bg-[#cccccc] pointer-events-none"
                    : " cursor-pointer"
                }
  `}
                onClick={previousPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" />
              </li>
              {customPagination?.map((data, index) => (
                <li
                  className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid bg-[#FFFFFF] cursor-pointer ${
                    currentPage == index
                      ? "text-blue-600  border-sky-500"
                      : "border-[#E4E4EB] "
                  }`}
                  onClick={() => changePage(index)}
                  key={index}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
                  currentPage == totalPage - 1
                    ? "bg-[#cccccc] pointer-events-none"
                    : " cursor-pointer"
                }`}
                onClick={nextPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodsTable;
