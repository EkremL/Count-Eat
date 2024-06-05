import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import Logo from "../../../Assets/Logo/logo.png";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []); // No changes here

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="topbar">
        <nav className="navbar">
          <Link onClick={closeMenu} to="/" className="logo">
            <img alt="Logo" src={Logo} />
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <FaBars />}
          </div>
          <ul className={`menu-list ${isOpen ? "open" : ""}`}>
            <li>
              <NavLink
                onClick={closeMenu}
                to="/explore"
                className="menu-list-item"
              >
                KEŞFET
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                to="/foods"
                className="menu-list-item"
              >
                BESİNLER
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                to="/diettypes"
                className="menu-list-item"
              >
                DİYET TÜRLERİ
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                to="/forproffesionals"
                className="menu-list-item"
              >
                PROFESYONELLER İÇİN
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                to="/blogs"
                className="menu-list-item"
              >
                BLOG
              </NavLink>
            </li>
          </ul>
          <div
            className={`Together ${
              isOpen ? "open" : ""
            } flex flex-col justify-center items-center`}
          >
            {isAuthenticated ? (
              <>
                <AiOutlineUser className="text-white text-2xl cursor-pointer" />
                <AiOutlineLogout
                  className="text-white text-2xl cursor-pointer mt-2"
                  onClick={handleLogout}
                />
              </>
            ) : (
              <>
                <button>
                  <Link to="/register" className="login ">
                    KAYIT OL
                  </Link>
                </button>
                <p className="Already mt-1 hover:underline text-green-600">
                  <Link
                    className="Already-text text-green-600 font-semibold text-sm"
                    to="/login"
                  >
                    Zaten üye misiniz? Giriş yapın.
                  </Link>
                </p>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
