import Skill from "./skill/page";

export default function Skills() {
    var skills = [".NET (C#)", "Python", "TypeScript", "Next.js", "MongoDB", "SQL", "Azure", "AWS Lambda", "CI/CD", "OOP", "REST APIs", "GitHub"]

    return (
        <div id="skills" className="flex flex-col scroll-mt-20 bg-neutral-50 w-full px-margin-padding">
            <div className="flex justify-end pt-10">
                <h1 className="text-2xl tracking-wide text-gray-500">Skills</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-8 lg:py-16">
                {skills.map((skill: string) => (
                    <Skill key={skill} skill={skill}/>
                ))}
            </div>
        </div>
    )
  }