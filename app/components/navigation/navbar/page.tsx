import Link from "next/link";


export default function Navbar(props: any) {
    return (
      <>
        <div className="flex justify-end items-center sm:justify-center object-top bg-blue-600 h-20 w-full">
            <ul className="flex items-center">
                {(props.linkText ?? []).map((text: string) => (
                    <li key={text}>
                        <Link href={props.hrefSymbol + text.toLowerCase()}>
                            <span className="flex items-center justify-center w-24 h-20 px-2 hover:bg-blue-700 duration-200 ease-in-out text-white">{text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </>
    )
  }