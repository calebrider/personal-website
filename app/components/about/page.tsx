import Image from "next/image"

export default function About() {
    return (
        <div id="about" className="scroll-mt-20">
            <div className="flex justify-center w-full">
                <h1 className="text-6xl tracking-wide pt-10">About</h1>
            </div>
            <div className="flex flex-col items-center justify-around pb-10">
                <div className="flex flex-col space-y-4 max-w-sm lg:max-w-lg p-10">
                    <h1 className="text-4xl tracking-wide">Caleb Rider</h1>
                    <h2 className="text-xl tracking-wide">Software Engineer</h2>
                    <p>Hi! I&apos;m a software engineer based out of Richmond, VA.
                    I&apos;ve been working professionally since May 2020,
                    and most of my professional software experience consists of
                    back-end development in both C# (.NET) and Python.
                    I also enjoy front-end development in my spare time.
                    </p>
                </div>
                <div className="relative w-52 h-52 sm:w-72 sm:h-72">
                    <Image
                        className="rounded-full w-auto"
                        src="/headshot.jpg"
                        alt="Headshot"
                        fill={true}
                        priority
                    />
                </div>
            </div>
        </div>
    )
  }