import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useTheme from "../hooks/useTheme";

const MainLayout = () => {
  const { darkMode } = useTheme();
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <Navbar />
      <div className="min-h-[calc(100vh-228px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
