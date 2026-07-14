import {
  TrendingUp
} from "lucide-react";


export default function StatCard({
  title,
  value,
  icon
}){


return (

<div

className="
bg-white
dark:bg-slate-900
rounded-2xl
p-6
shadow-sm
hover:shadow-lg
transition
"

>


<div
className="
flex
justify-between
items-center
"
>


<div>

<p
className="
text-slate-500
"
>
{title}
</p>


<h2
className="
text-3xl
font-bold
mt-3
dark:text-white
"
>
{value}
</h2>

</div>



{
icon
?
icon
:
<TrendingUp
className="text-blue-600"
/>
}


</div>


</div>

)

}