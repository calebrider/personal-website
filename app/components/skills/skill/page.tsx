export default function Skill(props: any) {
    return (
        <div className="flex m-auto flex-col justify-center items-center shadow-md rounded-md w-40 h-12 overflow-hidden bg-white hover:scale-105 duration-100 ease-in-out">
            <span className="font-bold text-lg tracking-wide text-blue-600">{props.skill}</span>
        </div>
    )
  }