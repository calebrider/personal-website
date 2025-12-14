import { FaCheck } from "react-icons/fa"


export default function Skill(props: any) {
    return (
        <div className="flex flex-row items-center w-5/6 space-x-2 text-secondary-text">
            <FaCheck color={"#4BB543"} className="hover:cursor-pointer hover:color-accent ml-2 scale-50"/>
            <span className="text-md tracking-wide">{props.skill}</span>
        </div>
    )
  }