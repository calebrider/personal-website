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
                    {(props.technologies ?? []).map((technology: string) => (
                        <li key={technology} className="text-primary py-1">• {technology}</li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center h-1/5">
                <Link href={(props.url ?? "")} className="h-1/2 w-1/2 text-center py-2 text-white rounded-full transition-all duration-500 bg-gradient-to-l from-primary via-accent to-primary bg-size-200 bg-pos-100 hover:bg-pos-0">Hover me</Link>
            </div>
        </div>
    )
  }