export default function InputGroup({label, placeholder, id, value, disabled, hidden, change, required}: {label: any, placeholder: any, id: any, value?: any, disabled?: any, hidden?: any, change: any, required?: any }) {


    return (
        <div className={hidden ? 'h-0' : 'text-white'}>
            <label className="text-[18px] block mb-2">{label}</label>
            <input placeholder={placeholder} id={id} value={value} disabled={disabled} name={id}
                   className="px-6 w-full py-2 bg-white/10 placeholder:text-white/30 focus:border-white/30 focus:outline-0 border-2 hover:border-white/20 border-white/10 rounded" onChange={change} required={required}/>

        </div>
    )
}