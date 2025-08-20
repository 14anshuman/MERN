import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import AddUser from "./pages/AddUser";
import ViewUsers from "./pages/ViewUsers";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import DynamicRoute from "./components/DynamicRoute";
import HooksDemo1 from "./pages/HooksDemo1";
import HooksDemo2 from "./pages/HooksDemo2";
import EditRecord from "./pages/EditRecord";
import DemoApp from "./pages/DemoApp";
import ProtectedRoutes from "./context/protectedRoutes";


function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        
       
        <Route path="/dash" element={<ProtectedRoutes userRole="admin">
          <DashBoard />
        </ProtectedRoutes>}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="viewUsers" element={<ViewUsers />} />
          <Route path="hook1" element={<HooksDemo1 />} />
          <Route path="hook2" element={<HooksDemo2 />} />
          <Route path="edit/:uid" element={<EditRecord />} />
          <Route path="app" element={<DemoApp/>} />
        </Route>
        <Route path="/dynamic/:nm" element={<DynamicRoute />} />

      </Routes>
    </>
  );
}

export default App;
