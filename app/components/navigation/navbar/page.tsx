import Link from "next/link";

export default function Navbar() {
    var linkText = ["About", "Skills", "Projects", "Contact"]
    var hrefSymbol: string = "#"

    return (
      <>
        <div className="flex justify-center object-top bg-blue-600 h-20 sticky top-0 w-full">
            <ul className="flex items-center">
                {linkText.map((text: string) => (
                    <li>
                        <Link href={hrefSymbol + text.toLowerCase()}>
                            <span className="flex items-center justify-center w-24 h-20 px-4 hover:bg-blue-700 duration-200 ease-in-out text-white">{text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </>
    )
  }