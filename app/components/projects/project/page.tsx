import GradientButton from "../../gradient-button/page"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"

export default function Project(props: any) {
    const technologies = props.technologies ?? []
    const isOddCount = technologies.length % 2 === 1

    return (
        <div className="flex flex-col items-center shadow-md rounded-md w-full gap-6 py-8 bg-surface">
            <div className="flex justify-center items-center">
                <span className="uppercase text-lg tracking-wide text-gray-900">{props.title}</span>
            </div>
            <div className="flex justify-center w-5/6">
                <Image 
                    src={props.src}
                    alt="Headshot"
                    width={400}
                    height={400}
                    className="max-w-sm h-auto w-full shadow-lg rounded-md"
                />
            </div>
            <div className="flex flex-col w-5/6">
                <span className="px-6 text-center text-primary-text uppercase">Skills Used:</span>
                <ul className="grid grid-cols-2 h-full px-2 pt-2 gap-x-4">
                    {technologies.map((technology: string, index: number) => {
                        const isLast = index === technologies.length - 1

                        return (
                        <li
                            key={technology}
                            className={`flex items-center py-1 text-sm text-secondary-text
                            ${isLast && isOddCount ? "col-span-2" : ""}
                            `}
                        >
                            <FaCheck color="#4BB543" className="ml-2 mr-2 scale-50" />
                            <span>{technology}</span>
                        </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex justify-center gap-4 items-end mt-auto">
                {(props.buttons ?? []).map((button: any) => (
                    <GradientButton key={button.href} href={(button.href ?? "")} title={button.buttonTitle} target={button.target}/>
                ))}
            </div>
        </div>
    )
  }