import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}

from "recharts";



export default function DashboardChart({
data=[]
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


<h2 className="mb-5">
آمار
</h2>


<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={data}>


<XAxis
dataKey="name"
/>


<YAxis />


<Tooltip/>


<Bar
dataKey="value"
/>


</BarChart>


</ResponsiveContainer>


</div>

)

}