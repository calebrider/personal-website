import Skill from "../skill/page"


export default function SkillCard(props: any) {
    return (
        <div className="flex flex-col shadow-md rounded-md w-60 gap-6 py-8 bg-white">
            <div className="flex justify-center items-center">
                <span className="font-bold text-xl tracking-wide text-gray-900">{props.title}</span>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 h-fit">
                {(props.skills ?? []).map((skill: string) => (
                    <Skill key={skill} skill={skill}/>
                ))}
            </div>
        </div>
    )
  }