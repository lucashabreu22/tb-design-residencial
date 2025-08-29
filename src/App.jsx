import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

/*Components Import*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
