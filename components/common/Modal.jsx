export default function Modal({
open,
title,
children,
close
}){


if(!open)
return null;



return (

<div

className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
"

>


<div

className="
bg-white
rounded-2xl
p-6
w-[90%]
md:w-[500px]
"

>


<div
className="
flex
justify-between
mb-5
"
>


<h2 className="font-bold">
{title}
</h2>


<button
onClick={close}
>
✕
</button>


</div>


{children}


</div>


</div>


)

}