import { useState, useMemo, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
// import Foods from "../../../echo.json";

const FoodsTable = () => {
  const [ingredients, setIngredients] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // const [foods] = useState(Foods.Ingredient);
  const [rowsLimit] = useState(20);
  const [rowsToShow, setRowsToShow] = useState(ingredients.slice(0, rowsLimit));
  const [customPagination, setCustomPagination] = useState([]);
  const [totalPage, setTotalPage] = useState(
    Math.ceil(ingredients?.length / rowsLimit)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [searchFood, setSearchFood] = useState("");
  // const dropdownRef = useRef(null);
  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = ingredients.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };
  const changePage = (value) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = ingredients.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };
  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = ingredients.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };
  useMemo(() => {
    setCustomPagination(
      Array(Math.ceil(ingredients?.length / rowsLimit)).fill(null)
    );
  }, [rowsLimit, ingredients?.length]);

  const handleClickCloseButton = (e) => {
    e.preventDefault();
    setSearchFood("");
  };

  const handleInputChange = (e) => {
    setSearchFood(e.target.value);
  };

  // console.log(searchFood);

  useEffect(() => {
    const fetchIngretients = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/ingredients`);

        if (response.ok) {
          const data = await response.json();
          setIngredients(data);
        } else {
          console.log("Veri çekme hatasi");
        }
      } catch (error) {
        console.log("Çekme hatasi", error);
      }
    };
    fetchIngretients();
  }, [apiUrl]);

  useEffect(() => {
    // rowsToShow değerini güncelle
    const startIndex = currentPage * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = ingredients.slice(startIndex, endIndex);
    setRowsToShow(newArray);

    // totalPage değerini güncelle
    const newTotalPage = Math.ceil(ingredients.length / rowsLimit);
    setTotalPage(newTotalPage);
  }, [ingredients, currentPage, rowsLimit]);

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
              ? ingredients?.length
              : (currentPage + 1) * rowsLimit}{" "}
            of {ingredients?.length} entries
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
