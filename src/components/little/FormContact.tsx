interface Props {
    label: string,
    placeholder: string,
    name: string,
    value: string,
    type?: string,
    classname?: {
        label?: string,
        input?: string,
    },
    onChange: (name: string, value: string) => void,
}

const FormContactInput = (props: Props) => {
    return (
        <div className="flex flex-col justify-start">
            <label htmlFor="" className={`${props.classname?.label} md:text-xl text-zinc-200`}>{props.label}</label>
            <input
            type={props.type}
            name={props.name}
            value={props.value}
            className={`mt-2 p-2 text-lg rounded-md ${props.classname?.input}`} 
            placeholder={props.placeholder} 
            onChange={(event) => props.onChange(props.name, event.target.value)}
            />
        </div>
    )
}

const FormContactTextArea = (props: Props) => {
    return (
        <div className="flex flex-col justify-start">
            <label htmlFor="" className="mt-5 md:text-xl text-zinc-200">{props.label}</label>
            <textarea
            name={props.name}
            value={props.value}
            rows={4} 
            className={`mt-2 p-2 text-lg rounded-md`} 
            placeholder={props.placeholder} 
            onChange={(event) => props.onChange(props.name, event.target.value)}
            />
        </div>
    )
}
export default {FormContactInput, FormContactTextArea}