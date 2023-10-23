import Image from "next/image"

export default function About() {
    return (
        <div id="about" className="flex flex-col scroll-mt-20 w-full px-margin-padding">
            <div className="flex pt-10 justify-end">
                <h1 className="text-2xl tracking-wide text-gray-500">About</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center items-center content-start lg:content-center py-8 lg:py-16 gap-8 lg:gap-24">
                <div className="flex justify-end lg:w-1/2">
                    <div className="flex flex-col">
                        <h1 className="text-4xl tracking-wide">Caleb Rider</h1>
                        <h2 className="pt-2 text-xl tracking-wide">Software Engineer</h2>
                        <p className="pt-5 max-w-sm">Hello! I&apos;m a software engineer based out of Richmond, VA.
                        I&apos;ve been working professionally since May 2020,
                        and most of my professional software experience consists of
                        back-end development in both C# (.NET) and Python.
                        I also enjoy front-end development in my spare time.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start lg:w-1/2">
                    <Image src="/headshot.jpg" alt="Headshot" width={400} height={400} className="max-w-sm h-auto w-full shadow-lg rounded-full"/>
                </div>
            </div>
        </div>
    )
  }