import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { FetchData } from "../components/FetchData";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const [hamburger, setHamburger] = useState(false);

  const fetching = useSelector((store) => store.Fetch);

  function handleHamburger() {
    setHamburger(!hamburger);
  }

  return (
    <>
      <div className="sm:flex select-none flex flex-col">
        <div className="sm:w-full flex">
          <Sidebar handleHamburger={handleHamburger} hamburger={hamburger} />

          <div className="h-screen scroll-smooth overflow-scroll flex-1">
            <Header handleHamburger={handleHamburger} />

            <main className="mt-14">
              <FetchData />
              {fetching.fetching ? <LoadingSpinner /> : <Outlet />}
            </main>
          </div>
        </div>
        {!hamburger && <Footer />}
      </div>
    </>
  );
}

export default App;
