import Project from "./project/page"


export default function Projects() {
    var websiteTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS']
    var projectTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Amadeus API']
    var gameTechnologies = ['C#', 'OOP', 'Unity']

    var websiteCodeButton = {
        buttonTitle: "View Code",
        href: "https://github.com/calebrider/personal-website",
        target: "_blank"
    }

    var gameCodeButton = {
        buttonTitle: "View Code",
        href: "https://github.com/calebrider/fox-run/tree/main/Scripts",
        target: "_blank"
    }

    var gamePlayButton = {
        buttonTitle: "Play",
        href: "/game",
        target: "_blank"
    }

    return (
        <div id="projects" className="flex flex-col items-center scroll-mt-20 w-full px-margin-padding">
            <div className="pt-10">
                <h1 className="text-2xl tracking-wide text-gray-500">Projects</h1>
            </div>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-2 w-fit gap-5 lg:gap-10 py-8 lg:py-16">
                    <Project title="This Website" src="/website-screenshot.jpg" technologies={websiteTechnologies} buttons={[websiteCodeButton]}/>
                    <Project title="Unity Game" src="/game-screenshot.jpg" technologies={gameTechnologies} buttons={[gameCodeButton, gamePlayButton]}/>
                </div>
            </div>
        </div>
    )
  }