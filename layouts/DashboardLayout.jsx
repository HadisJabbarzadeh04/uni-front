import {
useState
}
from "react";


import Sidebar
from "../components/layout/Sidebar";


import Header
from "../components/layout/Header";


import Breadcrumb
from "../components/layout/Breadcrumb";



export default function DashboardLayout({

children,

title,

menuItems=[],

breadcrumb=[]

}){



const [collapsed,setCollapsed]=useState(false);




return (

<div

className="
flex
min-h-screen
bg-slate-100
dark:bg-slate-950
"

>



{/* Sidebar */}

<Sidebar

collapsed={collapsed}

menuItems={menuItems}

/>





{/* Main */}

<div
className="
flex-1
flex
flex-col
"

>



{/* Header */}

<Header

title={title}

onToggleSidebar={()=>
setCollapsed(!collapsed)
}

/>





{/* Content */}

<main
className="
p-6
"
>



<Breadcrumb items={breadcrumb}/>



<div>

{children}

</div>


</main>


</div>


</div>

)

}