export default function InputCheckbox({label, placeholder, id, extraClass, value, change, required}: any) {

    return (
        <div className={extraClass}>
            <input type="checkbox" id={id} name={id} placeholder={placeholder} className="styled-checkbox " onChange={change} required={required}/>
            <label htmlFor={id} className="text-[18px] inline">{label}</label>
        </div>
    )
}