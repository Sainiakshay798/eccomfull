import React, { useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-autu flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here... "
            className="w-full outline-none "
          />

          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex item-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          {" "}
          {/* user and icon start */}
          <div className="relative  flex justify-center">
            {" "}
            {/* admin user icon */}
            {user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center "
                onClick={() => setMenuDisplay((preve) => !preve)}>
                {" "}
                {/* user icon */}
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}
            {menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded ">
                {" "}
                {/*menu admin  */}
                <nev>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((preve) => !preve)}>
                      Admin Panel
                    </Link>
                  )}
                </nev>
              </div>
            )}
          </div>{" "}
          {/* admin user icon */}
          <div className="text-2xl relative">
            {" "}
            {/*  add to cart icon */}
            <spam>
              {" "}
              <FaShoppingCart />
            </spam>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2  -right-3">
              {" "}
              {/*  count on cart in 1080 screen    absolute -top-2 -right-3 */}
              <p className="text-sm"> 0</p>
            </div>
          </div>
          <div>
            {" "}
            {/*     login/logout */}
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full bg-red-500 hover:bg-red-600">
                Logout
              </button>
            ) : (
              <Link
                to={"/Login"}
                className="px-3 py-1 rounded-full bg-red-500 hover:bg-red-600">
                Login
              </Link>
            )}
          </div>
          {/*     login/logout */}
        </div>
      </div>
    </header>
  );
};

export default Header;
