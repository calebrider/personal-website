import Project from "./project/page"


export default function Projects() {
    var websiteTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS']
    var projectTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Amadeus API']
    var gameTechnologies = ['C#', 'OOP', 'Unity']

    return (
        <div id="projects" className="flex flex-col items-center scroll-mt-20 w-full px-margin-padding">
            <div className="pt-10">
                <h1 className="text-2xl tracking-wide text-gray-500">Projects</h1>
            </div>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-2 w-fit gap-5 lg:gap-10 py-8 lg:py-16">
                    <Project title="This Website" technologies={websiteTechnologies} buttonTitle="View Code" href="https://github.com/calebrider/personal-website"/>
                    <Project title="Unity Game" technologies={gameTechnologies} buttonTitle="Play" href="/game"/>
                </div>
            </div>
        </div>
    )
  }