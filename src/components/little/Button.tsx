interface Props {
    text: string,
    classname?: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

const Button = (props: Props) => {
    return (
        <>
            <button 
            className={`bg-blue-600 text-sm md:text-lg font-semibold py-2 px-4 md:px-8 rounded-full ${props.classname}`}
            type={props.type}
            onClick={() => props.onClick}
            >
                {props.text}
            </button>
        </>
    )
}

export default Button