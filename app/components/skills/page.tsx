import SkillCard from "./skill-card/page";
import GradientButton from "../gradient-button/page";


export default function Skills() {
    var frontEndSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    var backEndSkills = ["Python", ".NET (C#)", "TypeScript", "MongoDB", "SQL"]
    var miscSkills = ["OOP", "CI/CD", "REST APIs", "Azure", "AWS Lambda", "GitHub"]

    return (
        <div id="skills" className="flex flex-col items-center scroll-mt-20 bg-neutral-50 w-full px-margin-padding">
            <div className="flex justify-end pt-10">
                <h1 className="text-2xl tracking-wide text-gray-500">Skills</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 py-8 lg:py-16">
                <SkillCard title="Front-End" skills={frontEndSkills}/>
                <SkillCard title="Back-End" skills={backEndSkills}/>
                <SkillCard title="Misc" skills={miscSkills}/>
            </div>
            <div className="flex justify-center w-fit pb-8 lg:pb-16">
                <GradientButton href="/resume-caleb-rider.pdf" title="View Resume"/>
            </div>
        </div>
    )
  }