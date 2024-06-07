import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { basicSchema } from "../../Schemas";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("isRegistered", "true");
        actions.resetForm();
        navigate("/verify");
      } else {
        alert(data.message || "Kayıt başarısız.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Bir hata oluştu.");
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <>
      <section className="AuthBackground">
        <div className="flex flex-col justify-center ml-48 px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full shadow md:mt-0 border-gray-600 border-2 rounded-xl sm:max-w-md xl:p-0 bg-slate-950">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
                Kayıt Ol
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Kullanıcı Adı
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="John Doe"
                    className={`bg-gray-50 border ${
                      errors.username && touched.username
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 ${
                      errors.username && touched.username
                        ? "focus:border-red-500"
                        : "focus:border-primary-600"
                    } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.username && touched.username
                        ? "dark:focus:ring-red-500"
                        : "dark:focus:ring-green-500"
                    }`}
                    required
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && (
                    <p className="text-red-500">{errors.username}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`bg-gray-50 border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 ${
                      errors.email && touched.email
                        ? "focus:border-red-500"
                        : "focus:border-primary-600"
                    } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.email && touched.email
                        ? "dark:focus:ring-red-500"
                        : "dark:focus:ring-green-500"
                    }`}
                    placeholder="name@company.com"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Şifre
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 ${
                      errors.password && touched.password
                        ? "focus:border-red-500"
                        : "focus:border-primary-600"
                    } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.password && touched.password
                        ? "dark:focus:ring-red-500"
                        : "dark:focus:ring-green-500"
                    }`}
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="passwordConfirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Şifre Tekrarı
                  </label>
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="••••••••"
                    className={`bg-gray-50 border ${
                      errors.passwordConfirm && touched.passwordConfirm
                        ? "border-red-500"
                        : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 ${
                      errors.passwordConfirm && touched.passwordConfirm
                        ? "focus:border-red-500"
                        : "focus:border-primary-600"
                    } block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      errors.passwordConfirm && touched.passwordConfirm
                        ? "dark:focus:ring-red-500"
                        : "dark:focus:ring-green-500"
                    }`}
                    required
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <p className="text-red-500">{errors.passwordConfirm}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Kayıt ol
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Zaten hesabınız var mı?
                  <Link
                    to={"/login"}
                    className="font-medium text-green-600 hover:underline dark:text-primary-500 ml-2"
                  >
                    Giriş Yap
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

export default Register;
