function Title({ text, paragraph }) {
    return (
        <div className="bg-primary-500 w-[1040px] h-[79px] text-white m-auto rounded-sm flex flex-col items-center justify-center ">
            <p className="text-md font-bold>">{text}</p>
            <p className="text-sm">{paragraph}</p>
        </div>
    )
}
export default Title