import Link from "next/link"


export default function GradientButton(props: any) {
    return (
        <Link href={(props.href ?? "")} target={props.target} className="flex justify-center items-center h-min w-full py-1 px-8 text-white tracking-widest rounded-full transition-all duration-500 bg-gradient-to-l from-primary via-accent to-primary bg-size-200 bg-pos-100 hover:bg-pos-0">{props.title}</Link>
    )
  }