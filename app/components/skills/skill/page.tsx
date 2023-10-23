import { FaDotCircle } from "react-icons/fa"


export default function Skill(props: any) {
    return (
        <div className="flex flex-row items-center w-5/6 space-x-2 text-primary border-b-2 border-neutral-200">
            <FaDotCircle color={"#3f37c9"} className="hover:cursor-pointer hover:color-accent ml-2 scale-50"/>
            <span className="text-lg tracking-wide">{props.skill}</span>
        </div>
    )
  }