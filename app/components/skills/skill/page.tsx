export default function Skill(props: any) {
    return (
        <div className="flex m-auto flex-col justify-center items-center shadow-md rounded-md w-32 h-12 overflow-hidden bg-white text-blue-600 hover:bg-blue-600 hover:text-white duration-200 ease-in-out">
            <span className="font-bold text-md sm:text-lg tracking-wide">{props.skill}</span>
        </div>
    )
  }