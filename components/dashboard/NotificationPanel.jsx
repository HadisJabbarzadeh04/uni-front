import {
Bell
}
from "lucide-react";


export default function NotificationPanel({
notifications=[]
}){


return (

<div

className="
bg-white
dark:bg-slate-900
rounded-2xl
p-5
shadow
"

>


<div
className="
flex
gap-2
items-center
mb-5
"
>

<Bell/>

<h2>
اعلان‌ها
</h2>


</div>



{
notifications.length===0

?

<p className="text-slate-500">
اعلانی وجود ندارد
</p>


:

notifications.map(
(n,i)=>(


<div

key={i}

className="
bg-slate-100
dark:bg-slate-800
p-3
rounded-xl
mb-2
"

>

{n.message}

</div>


)
)

}



</div>


)

}