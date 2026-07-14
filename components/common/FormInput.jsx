export default function FormInput({
label,
value,
onChange,
type="text",
placeholder
}){


return (

<div>


<label
className="block mb-2"
>

{label}

</label>



<input

type={type}

value={value}

onChange={onChange}

placeholder={placeholder}

className="
border
rounded-xl
p-3
w-full
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>

)

}