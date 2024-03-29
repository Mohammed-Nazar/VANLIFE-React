import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import Vans from "./components/vans/vans";
import VanDetails from "./components/vans/vanDetails";
import Error from "./components/error";
import Layout from "./components/layout/layout";
import SignUp from "./components/account/signup/signup";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/account/login/Login";
import RequireAuth from "./context/RequireAuth";
import Profile from "./components/account/profile/Profile";
import EditeProfile from "./components/account/EditeProfile/EditeProfile";
import Verify from "./components/account/verify/Verify";
import RequireVerify from "./context/RequireVerify";
import Dashboard from "./components/host/dashboard/Dashboard";
import Reviwes from "./components/host/reviews/Reviwes";
import Income from "./components/host/income/Income";
import { Host } from "./components/host/host";
import "./server";
import HostVans from "./components/host/hostVans/HostVans";
import HostVansDe from "./components/host/hostVans/HostVansDe";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route element={<RequireAuth />}>
              <Route element={<RequireVerify />}>
                <Route path="profile" element={<Profile />} />
                <Route path="editeProfile" element={<EditeProfile />} />
                <Route path="host" element={<Host />}>
                  <Route index element={<Dashboard />} />
                  <Route path="reviews" element={<Reviwes />} />
                  <Route path="income" element={<Income />} />
                  <Route path="vans" element={<HostVans/>}/>
                  <Route path="vans/:id" element={<HostVansDe/>}/>
                </Route>
              </Route>
              <Route path="/emailVerify" element={<Verify />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
