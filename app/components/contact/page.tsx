import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col justify-center w-5/6 scroll-mt-20 border-t-2 border-t-gray-200">
            <div className="flex justify-end w-full">
                <h1 className="text-2xl tracking-wide pt-10 text-gray-500">Contact</h1>
            </div>
            <div className='flex justify-center'>
                <div className="flex flex-col items-center py-8 lg:py-16">
                    <div className="grid grid-cols-3 gap-10">
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
                    <div className="flex items-center justify-center py-8 lg:py-16">
                        <p>Don&apos;t hesitate to reach out!</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }