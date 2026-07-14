export default function SearchBar({
value,
setValue
}){


return (

<input

value={value}

onChange={
e=>setValue(e.target.value)
}

placeholder="جستجو..."

className="
w-full
border
rounded-xl
p-3
"

/>

)

}