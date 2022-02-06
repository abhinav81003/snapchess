import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar/>

      <Outlet />
    </>
  )
};

export default Layout;