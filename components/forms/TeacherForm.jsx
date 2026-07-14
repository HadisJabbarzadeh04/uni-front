import {
useState
}
from "react";


import FormInput
from "../common/FormInput";


import Button
from "../common/Button";


import {
createTeacher
}
from "../../api/teacherApi";


export default function TeacherForm({
close,
refresh
}){


const [form,setForm]=useState({

name:"",
email:"",
group:""

});



const change=e=>

setForm({

...form,

[e.target.name]:
e.target.value

});





const submit=async()=>{


await createTeacher(form);


refresh();


close();


};




return (

<div
className="space-y-4"
>


<FormInput

label="نام"

value={form.name}

onChange={change}

placeholder="نام استاد"

/>



<input
name="email"
onChange={change}
placeholder="ایمیل"
className="border p-3 rounded-xl w-full"
/>



<input
name="group"
onChange={change}
placeholder="گروه آموزشی"
className="border p-3 rounded-xl w-full"
/>



<Button
onClick={submit}
>

ثبت استاد

</Button>


</div>

)

}