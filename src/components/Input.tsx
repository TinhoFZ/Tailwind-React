type InputProps = {
    placeholder: string;
    className?: string;
}

export default function Button(props: InputProps) {

    return(
        <input 
        placeholder={props.placeholder}
        className={`bg-white ${props.className}`}
         />
    )
}