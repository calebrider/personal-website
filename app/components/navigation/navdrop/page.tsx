"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";

export default function Navdrop(props: any) {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
      <>
        <div className="flex justify-end items-center sm:justify-center object-top bg-blue-600 h-20 w-full">
            <div className="flex mr-5">            
                <Hamburger toggled={isOpen} toggle={handleClick} rounded color="#fff"/>
            </div>
        </div>
        <div className={`absolute w-full max-h-0 bg-blue-600 rounded-b-lg overflow-hidden transition-height duration-500 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
            <ul className="flex flex-col items-center">
                {(props.linkText ?? []).map((text: string) => (
                    <li key={text}>
                        <Link href={props.hrefSymbol + text.toLowerCase()} onClick={handleClick}>
                            <span className="flex items-center justify-center w-screen h-16 px-2 hover:bg-blue-700 text-white">{text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </>
    )
  }