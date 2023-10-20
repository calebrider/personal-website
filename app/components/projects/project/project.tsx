import Link from "next/link"

export default function Project(props: any) {
    return (
        <div className="flex flex-col shadow-md rounded-md w-60 h-96 overflow-hidden bg-white">
            <div className="flex justify-center items-center h-1/5">
                <span className="font-bold text-xl tracking-wide text-gray-900">{props.title}</span>
            </div>
            <div className="h-3/5">
                <h3 className="px-8 pt-2 text-start text-gray-900">Technologies Used:</h3>
                <ul className="px-12 py-2">
                    {props.technologies.map((technology: string) => (
                        <li key={technology} className="text-blue-700 py-1">• {technology}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-items-end justify-center items-center h-1/5">
                <Link href={props.url} className="text-center align-middle bg-blue-600 hover:bg-blue-700 duration-200 ease-in-out w-40 py-2 rounded-md text-white">{props.button}</Link>
            </div>
        </div>
    )
  }