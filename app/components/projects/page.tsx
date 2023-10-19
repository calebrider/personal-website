import Project from "./project/project"

export default function Projects() {
    var websiteTechnologies = ['TypeScript', 'Next.js', 'Tailwind CSS']
    var projectTechnologies = ["MongoDB"]
    var emptyTechnologies: any = []
    return (
        <div id="projects" className="scroll-mt-20">
            <div className="flex justify-center w-full">
                <h1 className="text-4xl tracking-wide p-10">Projects</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
                <Project title="This Website" technologies={websiteTechnologies} button="CODE"/>
                <Project title="Something Else" technologies={projectTechnologies} button="SITE"/>
                <Project technologies={emptyTechnologies}/>
            </div>
        </div>
    )
  }