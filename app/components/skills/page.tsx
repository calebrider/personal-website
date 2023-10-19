import Skill from "./skill/page";

export default function Skills() {
    var skills = [".NET (C#)", "Python", "TypeScript", "Next.js", "MongoDB", "SQL", "Azure", "AWS Lambda", "CI/CD", "OOP", "REST APIs", "GitHub"]

    return (
        <div id="skills" className="flex flex-col scroll-mt-20">
            <div className="flex justify-center w-full">
                <h1 className="text-4xl tracking-wide p-10">Skills & Proficiencies</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 justify-center items-center">
                {skills.map((skill: string) => (
                    <Skill key={skill} skill={skill}/>
                ))}
            </div>
        </div>
    )
  }