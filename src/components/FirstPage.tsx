import { TypeAnimation } from "react-type-animation"
const FirstPage = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div>
                    <Hallo />
                    <Typed />
                </div>
            </div>
        </>
    )
}

const Hallo = () => {
    return (
        <>
            <div
                data-aos='zoom-out'
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
                className="text-3xl md:text-5xl font-bold text-center font-serif text-zinc-200"
            >
                Hello 👋
            </div>
        </>
    )
}

const Typed = () => {
    return (
        <>
            <TypeAnimation
                sequence={[
                    1500,
                    'Welcome to my portfolio',
                ]}
                wrapper="div"
                speed={40}
                className="text-2xl md:text-4xl font-bold text-center font-serif text-zinc-200 mt-5"
            />
        </>
    )
}

export default FirstPage