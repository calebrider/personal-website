import Project from "./project/page"


export default function Projects() {
    var websiteTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS']
    var workoutAppTechnologies = ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Google Cloud']
    var gameTechnologies = ['C#', 'OOP', 'Unity']

    var workoutAppSiteButton = {
        buttonTitle: "View Web App",
        href: "https://workout-app.calebrider.dev/",
        target: "_blank"
    }
    var workoutAppCodeButton = {
        buttonTitle: "View Code",
        href: "https://github.com/calebrider/workout-app",
        target: "_blank"
    }
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
                <h1 className="text-2xl uppercase tracking-wide text-gray-500">Projects</h1>
            </div>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-3 w-fit gap-5 lg:gap-10 py-8 lg:py-16">
                    <Project title="This Website" src="/website-screenshot.jpg" technologies={websiteTechnologies} buttons={[websiteCodeButton]}/>
                    <Project title="Workout Tracking App" src="/workout-app-screenshot.jpg" technologies={workoutAppTechnologies} buttons={[workoutAppSiteButton, workoutAppCodeButton]}/>
                    <Project title="Unity Game" src="/game-screenshot.jpg" technologies={gameTechnologies} buttons={[gameCodeButton, gamePlayButton]}/>
                </div>
            </div>
        </div>
    )
  }
