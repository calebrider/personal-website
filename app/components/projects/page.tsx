import Project from "./project/project"

export default function Projects() {
    var websiteTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS']
    var projectTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Amadeus API']

    return (
        <div id="projects" className="scroll-mt-20">
            <div className="flex justify-center w-full">
                <h1 className="text-6xl tracking-wide pt-10">Projects</h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 place-items-center my-6 p-10">
                <Project title="This Website" technologies={websiteTechnologies} button="CODE" url="https://github.com/calebrider/personal-website"/>
                <Project title="Travel App" technologies={projectTechnologies} button="SITE" url=""/>
            </div>
        </div>
    )
  }