import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

export default function Contact() {
    return (
        <div id="contact" className="scroll-mt-20">
            <div className="flex justify-center w-full">
                <h1 className="text-6xl tracking-wide pt-10">Contact</h1>
            </div>
            <div className="grid grid-cols-3 gap-10 p-10 my-6">
                <Link href="https://www.linkedin.com/in/calebrider/">
                    <FaLinkedin size={50} color={"rgb(37 99 235)"} className="hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"/>
                </Link>
                <Link href="mailto: calebrider.dev@gmail.com">
                    <MdEmail size={50} color={"rgb(37 99 235)"} className="hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"/>
                </Link>
                <Link href="https://www.linkedin.com/in/calebrider/">
                    <FaGithub size={50} color={"rgb(37 99 235)"} className="hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"/>
                </Link>
            </div>
            <div className="flex items-center justify-center pb-20">
                <p>Don&apos;t hesitate to reach out!</p>
            </div>
        </div>
    )
  }