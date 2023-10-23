export default function Skill(props: any) {
    return (
        <div className="flex m-auto flex-col justify-center items-center shadow-md rounded-md w-full h-12 overflow-hidden bg-white text-primary hover:bg-primary hover:text-white duration-200 ease-in-out">
            <span className="font-bold text-md sm:text-lg tracking-wide">{props.skill}</span>
        </div>
    )
  }