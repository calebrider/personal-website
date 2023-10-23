import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'


export default function Contact() {
    return (
        <div id="contact" className="flex flex-col justify-center items-center scroll-mt-20 w-full px-margin-padding bg-gradient-to-b from-secondary to-primary to-80%">
            <div className="pt-10">
                <h1 className="text-2xl tracking-wide text-white">Contact</h1>
            </div>
            <div className='flex justify-center'>
                <div className="flex flex-col items-center pt-8 lg:pt-16">
                    <div className="grid grid-cols-3 gap-10">
                        <Link href="https://www.linkedin.com/in/calebrider/">
                            <FaLinkedin size={50} color={"#fff"} className="hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"/>
                        </Link>
                        <Link href="mailto: calebrider.dev@gmail.com">
                            <MdEmail size={50} color={"#fff"} className="hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"/>
                        </Link>
                        <Link href="https://github.com/calebrider/">
                            <FaGithub size={50} color={"#fff"} className="hover:cursor-pointer hover:scale-105 duration-200 ease-in-out"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center py-8 lg:py-16 text-white">
                        <p>Don&apos;t hesitate to reach out!</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }