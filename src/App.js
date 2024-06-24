import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashborad from "./component/admin/pages/Dashborad";
import AdminSidebar from "./component/admin/sidebar/Sidebar";
import Party from "./component/admin/pages/Party";
import Election from "./component/admin/pages/Election";
import Connection from "./component/admin/pages/Connection";
import User from "./component/admin/pages/User";
import AdminNavbar from "./component/admin/sidebar/Navbar";
import UserNavbar from "./component/user/sidebar/Navbar";
import UserSidebar from "./component/user/sidebar/Sidebar";
import Voting from "./component/user/pages/Voting";
import Profile from "./component/user/pages/Profile";
import Userloging from "./component/user/pages/Userloging";
import Adminlogin from "./component/admin/pages/Adminlogin";

function App() {

  // let admin = localStorage.getItem("admin");
  // console.log(admin , "app.js");

  function getRole() {
    let role = localStorage.getItem("role")
    return role;
  }

  let role = getRole();
  const location = useLocation();
  const loginPage = location.pathname === "/";

  if (role === "") {
    return (
      <Routes>
        <Route path="/" element={<Userloging />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    )
  }

  if (role === "admin") {
    return (
      <>
        <AdminNavbar />
        <div className="d-flex">
          <AdminSidebar />
          <Routes>
            <Route path="*" element={<Dashborad to="/" replace />} />
            <Route path="/dashborad" element={<Dashborad />} />
            <Route path="/party" element={<Party />} />
            <Route path="/election" element={<Election />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </>
    )
  }

  if (role === "user") {
    return (
      <>
        <UserNavbar />
        <div className="d-flex">
          <UserSidebar />
          <Routes>
            <Route path="/voting" element={<Voting />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Userloging />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )

}

export default App;
