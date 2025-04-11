import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md rounded-lg mb-4 max-w-8xl mx-auto">
      <h2 className="text-2xl font-bold">Reflexion</h2>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
