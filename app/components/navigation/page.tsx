import Navbar from "./navbar/page";
import Navdrop from "./navdrop/page";

export default function Navigation() {
  
  var linkText = ["About", "Skills", "Projects", "Contact"]

    return (
      <div className="sticky top-0 z-50 w-full">
        <div className="hidden sm:contents">
          <Navbar linkText={linkText} hrefSymbol="#"/>
        </div>
        <div className="contents sm:hidden">
          <Navdrop linkText={linkText} hrefSymbol="#"/>
        </div>
      </div>
    )
  }