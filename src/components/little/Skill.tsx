interface Props{
    name:string,
    
}
const Skill = (props: Props) => {
    return (
        <>
            <div className="w-10 h-10 md:w-20 md:h-20 hover:scale-110 transition-all duration-500">
                    <img src={`/assets/skill/${props.name}.svg`} alt={props.name} />
            </div>
        </>
    )
}

export default Skill