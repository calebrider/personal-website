import GradientButton from "../../gradient-button/page"
import { FaDotCircle } from "react-icons/fa"
import Image from "next/image"

export default function Project(props: any) {
    return (
        <div className="flex flex-col items-center shadow-md rounded-md w-120 gap-6 py-8 bg-neutral-100">
            <div className="flex justify-center items-center">
                <span className="font-bold text-xl tracking-wide text-gray-900">{props.title}</span>
            </div>
            <div className="flex w-5/6">
                <Image 
                    src={props.src}
                    alt="Headshot"
                    width={400}
                    height={400}
                    className="max-w-sm h-auto w-full shadow-lg rounded-md"
                />
            </div>
            <div className="flex flex-col w-5/6 h-full">
                <span className="px-6 text-center text-gray-600 font-bold">Skills Used:</span>
                <ul className="flex flex-wrap h-full justify-center items-center px-8 pt-2">
                    {(props.technologies ?? []).map((technology: string) => (
                        <div key={technology} className="flex flex-row justify-start items-center">
                            <FaDotCircle color={"#3f37c9"} className="hover:cursor-pointer hover:color-accent ml-2 scale-50"/>
                            <li className="text-primary py-1">{technology}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center items-end w-fit mt-auto">
                <GradientButton href={(props.href ?? "")} title={props.buttonTitle} target={props.target}/>
            </div>
        </div>
    )
  }