import Navbar from "./navbar/page";
import Navdrop from "./navdrop/page";

export default function Navigation() {
    return (
      <div className="sticky top-0 z-50 w-full">
        <div className="hidden sm:contents">
          <Navbar/>
        </div>
        <div className="contents sm:hidden">
          <Navdrop/>
        </div>
      </div>
    )
  }