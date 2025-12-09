import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-white">

      {/* Navbar - fixed at top */}
      <header className="sticky top-0 z-50 shadow-sm bg-white">
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="flex-1 h-full overflow-y-auto px-4 py-3">
        <Outlet />
      </main>

      {/* Footer */}
      {/* <footer className="mt-auto bg-gray-50 border-t">
        <Footer />
      </footer> */}

    </div>
  );
};

export default MainLayout;
