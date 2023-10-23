import GradientButton from "../../gradient-button/page"
import { FaDotCircle } from "react-icons/fa"


export default function Project(props: any) {
    return (
        <div className="flex flex-col items-center shadow-md rounded-md w-60 gap-6 py-8 bg-neutral-100">
            <div className="flex justify-center items-center">
                <span className="font-bold text-xl tracking-wide text-gray-900">{props.title}</span>
            </div>
            <div className="flex flex-col h-fit">
                <span className="px-8 pt-2 text-start text-gray-900">Technologies Used:</span>
                <ul className="px-8 py-2">
                    {(props.technologies ?? []).map((technology: string) => (
                        <div key={technology} className="flex flex-row justify-start items-center">
                            <FaDotCircle color={"#3f37c9"} className="hover:cursor-pointer hover:color-accent ml-2 scale-50"/>
                            <li className="text-primary py-1">{technology}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center items-end w-fit mt-auto">
                <GradientButton href={(props.href ?? "")} title={props.buttonTitle}/>
            </div>
        </div>
    )
  }