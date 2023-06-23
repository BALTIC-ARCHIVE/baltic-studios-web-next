export default function InputTextArea({label, placeholder, rows, id,  value, change, required}: any) {

    return (
        <div className="text-white col-span-2">
            <label className="text-[18px] block mb-2">{label}</label>
            <textarea placeholder={placeholder} name={id} rows={rows} id={id}
                      className="px-6 w-full py-2 bg-transparent border-2 hover:border-white/20 border-white/10 rounded" onChange={change} required={required}></textarea>
        </div>
    )
}