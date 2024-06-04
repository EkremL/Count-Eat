import { useRef } from "react";
import { Link } from "react-router-dom";

const Verify = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClear = () => {
    inputRefs.current.forEach((input) => (input.value = ""));
    inputRefs.current[0].focus();
  };

  return (
    <>
      <section className="AuthBackground">
        <div className="flex flex-col justify-center ml-48 px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full border-gray-600 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-slate-950">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight mb-16 text-gray-900 md:text-2xl dark:text-white flex justify-center">
                Doğrulama Kodu
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div className="flex justify-center space-x-2">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-12 p-2.5 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleChange(e, index)}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={handleClear}
                    className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center ml-8"
                  >
                    X
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Doğrula
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  <Link
                    to={"/register"}
                    className="font-medium text-green-600 hover:underline dark:text-primary-500 ml-2"
                  >
                    E Postanıza kod gelmedi mi? Tekrar kod gönder!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
