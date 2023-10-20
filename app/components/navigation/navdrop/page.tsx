"use client";

import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";


export default function Navdrop() {
    var linkText = ["About", "Skills", "Projects", "Contact"]
    var hrefSymbol: string = "#"

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
      <>
        <div className="flex justify-end items-center sm:justify-center object-top bg-blue-600 h-20 w-full">
            <div className="flex mr-5">            
                <Hamburger toggled={isOpen} toggle={handleClick} rounded color="#fff"/>
            </div>
        </div>
      </>
    )
  }