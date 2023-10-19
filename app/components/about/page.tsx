import Image from "next/image"

export default function About() {
    return (
        <div id="about" className="scroll-mt-20">
            <div className="flex justify-center w-full">
                <h1 className="text-6xl tracking-wide pt-10">About</h1>
            </div>
            <div className="flex flex-wrap items-center justify-around p-10">
                <div className="flex flex-col space-y-4 m-6 p-10">
                    <h1 className="text-5xl tracking-wide">Caleb Rider</h1>
                    <h2 className="text-xl tracking-wide">Software Engineer</h2>
                    <p>Hi! I&apos;m a software engineer based out of Richmond, VA.<br/>
                    I&apos;ve been working professionally since May 2020,<br/>
                    and most of my professional software experience consists of<br/>
                    back-end development in both C# (.NET) and Python.<br/>
                    I also enjoy front-end development in my spare time.
                    </p>
                </div>
                <div className="min-w-max">
                    <Image
                        className="rounded-full"
                        src="/headshot.jpg"
                        alt="Headshot"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
            </div>
        </div>
    )
  }