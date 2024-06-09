import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="topnav">
          <a href="#"><Link className="active" to="/">Home</Link></a>
          <a href='#'><Link to="/blogs">Top 10 Coins</Link></a>
          <a href="#"><Link to="/searchBar">All Crypto</Link></a>
          <a href="#"><Link to="/testMap2">coINFO</Link></a> 
          <a href="#"><Link to="/contact">Shop</Link></a> 
      </div>

      <Outlet />
    </>
  )
};

export default Layout;






