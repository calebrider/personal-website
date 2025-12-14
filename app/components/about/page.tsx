import Image from "next/image"
import GradientButton from "../gradient-button/page"


export default function About() {
    return (
        <div id="about" className="flex flex-col items-center scroll-mt-20 w-full px-margin-padding">
            <div className="pt-10">
                <h1 className="text-2xl uppercase tracking-wide text-gray-500">About</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center items-center content-start lg:content-center py-8 lg:py-16 gap-8 lg:gap-24">
                <div className="flex justify-end lg:w-1/2">
                    <div className="flex flex-col">
                        <h1 className="text-4xl tracking-wide text-primary-text">Caleb Rider</h1>
                        <h2 className="pt-2 text-xl tracking-wide text-primary-text">Software Engineer</h2>
                        <p className="pt-5 max-w-sm text-secondary-text">Hello! I&apos;m a software engineer based out of Richmond, VA, and
                        I&apos;ve been working professionally since May 2020. I&apos;m a backend-leaning software engineer with experience designing, 
                        building, and operating cloud-native systems in production. I&apos;ve built and maintained REST and GraphQL APIs in Python and C#, 
                        designed serverless architectures on AWS and Azure, and worked hands-on with databases, observability, 
                        and performance testing in high-traffic environments.
                        </p>
                        <div className="flex mx-auto py-8">
                            <GradientButton href="/caleb_rider_software_engineer_resume.pdf" title="View Resume"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start lg:w-1/2">
                    <Image src="/headshot.jpg" alt="Headshot" width={400} height={400} className="max-w-sm h-auto w-full shadow-lg rounded-full"/>
                </div>
            </div>
        </div>
    )
  }