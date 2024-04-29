import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Drawer, Input } from "antd";
const { Search } = Input;
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import SearchItem from "./SearchItem";

const Navbar = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-20 py-2 text-white bg-black ">
      <img src={logo} alt="Logo" className="h-[72px] w-52" />

      <div className="flex text-base gap-7">
        <Link to="/" className="hover:text-[#fee500]">
          Home
        </Link>
        <Link to="/shop" className="hover:text-[#fee500]">
          Shop
        </Link>
      </div>

      <div className="flex gap-5">
        <FaSearch className="text-2xl cursor-pointer" onClick={showDrawer} />

        <Link to="/cart">
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </Link>
      </div>

      <Drawer title="Search Products" onClose={onClose} open={open}>
        <div className="flex flex-col items-center">
          <Search
            placeholder="input search text"
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="w-full"
          />
          <SearchItem handleClick={onClose} />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
