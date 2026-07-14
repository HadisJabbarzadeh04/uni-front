export default function Breadcrumb({
items=[]
}){


return (

<div
className="
text-sm
text-slate-500
mb-5
"
>

{
items.join(" / ")
}

</div>


)

}