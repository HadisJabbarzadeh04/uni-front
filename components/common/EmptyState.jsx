import {
Inbox
}
from "lucide-react";


export default function EmptyState({
text="اطلاعاتی وجود ندارد"
}){


return (

<div

className="
flex
flex-col
items-center
justify-center
p-10
text-slate-500
"

>


<Inbox size={50}/>

<p>
{text}
</p>


</div>

)

}